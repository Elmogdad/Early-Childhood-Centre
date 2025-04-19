import { JWT_SECRET } from "../constants/env";
import { SessionDocument } from "../models/sessionModel";
import { UserDocument } from "../models/userModel";
import jwt, { SignOptions } from "jsonwebtoken";

export type RefreshTokenPayload = {
  sessionId: SessionDocument["_id"];
};

export type AccessTokenPayload = {
  userId: UserDocument["_id"];
  sessionId: SessionDocument["_id"];
};

type SignOptionsAndSecret = SignOptions & {
  secret: string;
};

const defaults: SignOptions = {
  audience: ["user"],
};

const acessTokenOptions: SignOptionsAndSecret = {
  expiresIn: "15m",
  secret: JWT_SECRET,
};

export const refreshTokenOptions: SignOptionsAndSecret = {
    expiresIn: "30d",
    secret: JWT_SECRET,
};

export const signToken = (
  payload: AccessTokenPayload | RefreshTokenPayload,
  options?: SignOptionsAndSecret
) => {
  const { secret, ...signOpts } = options || acessTokenOptions;
  return jwt.sign(payload, secret, {...signOpts, ...defaults});
};
