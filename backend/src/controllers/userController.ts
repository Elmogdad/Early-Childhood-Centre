import { CREATED } from "../constants/http";
import { createAccount, loginUser } from "../services/authService";
import catchErrors from "../utils/catchErrors";
import {
  registerValidation,
  loginValidation,
} from "../validations/authValidation";
import { setAuthCookies } from "../utils/cookies";
import { OK } from "../constants/http"; 

export const registerHandler = catchErrors(async (req, res) => {
  const request = registerValidation.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
  const { user, accessToken, refreshToken } = await createAccount(request);
  return setAuthCookies({ res, accessToken, refreshToken })
    .status(CREATED)
    .json(user);
});

export const loginHandler = catchErrors(async (req, res) => {
  const request = loginValidation.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });
  const { accessToken , refreshToken} = await loginUser(request);
  return setAuthCookies({ res, accessToken, refreshToken }).status(OK).json({ message: "Logged in Successfully" });
});
