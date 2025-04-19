import { JWT_REFRESH_SECRET, JWT_SECRET } from "../constants/env";
import { CONFLICT, UNAUTHORIZED } from "../constants/http";
import VerificationCodeType from "../constants/VerificationCodeType";
import SessionModel from "../models/sessionModel";
import UserModle from "../models/userModel";
import VerificationCodeModel from "../models/verificationCodeModel";
import appAssert from "../utils/appAssert";
import { oneYearFromNow } from "../utils/date";
import jwt from "jsonwebtoken";
import { refreshTokenOptions, signToken } from "../utils/jwt";

export type CreateAccountParams = {
  username: string;
  email: string;
  password: string;
  userAgent?: string;
};

export const createAccount = async (data: CreateAccountParams) => {
  // verify email is not already in use
  const existingUser = await UserModle.exists({ email: data.email });
  appAssert(!existingUser, CONFLICT, "Email is already in use");

  //   if (existingUser) {
  //     throw new Error("Email is already in use");
  //   }

  //create user
  const user = await UserModle.create({
    username: data.username,
    email: data.email,
    password: data.password,
  });

  const userId = user._id;
  //create verification code
  const verificationCode = await VerificationCodeModel.create({
    userId: user._id,
    type: VerificationCodeType.EmailVerification,
    expiresAt: oneYearFromNow(),
  });
  //send verification email

  //create session
  const session = await SessionModel.create({
    userId,
    userAgent: data.userAgent,
  });

  //sign acess token  & refresh token
  const refreshToken = signToken(
    { sessionId: session._id },
    refreshTokenOptions);
  const accessToken = signToken(
    {
      userId,
      sessionId: session._id,
    }
  );

  //return user and token
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};

type LoginParams = {
  email: string;
  password: string;
  userAgent?: string;
};

export const loginUser = async ({
  email,
  password,
  userAgent,
}: LoginParams) => {
  // get user by email
  const user = await UserModle.findOne({ email });
  appAssert(user, UNAUTHORIZED, "User not found");

  // validate password from the request
  const isValidPassword = await user.comparePassword(password);
  appAssert(isValidPassword, UNAUTHORIZED, "Invalid password");

  const userId = user._id;

  // create session
  const session = await SessionModel.create({
    userId,
    userAgent,
  });
  const sessionInfo = {
    sessionId: session._id,
  };

  // sign access token & refresh token
  const refreshToken = signToken(sessionInfo, refreshTokenOptions);
  const accessToken = signToken({ userId: user._id, ...sessionInfo });

  // return user and token
  return {
    user: user.omitPassword(),
    accessToken,
    refreshToken,
  };
};
