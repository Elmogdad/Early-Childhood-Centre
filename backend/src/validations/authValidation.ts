import { z } from "zod";

const emailValidation = z.string().email();
const passwordValidation = z.string().min(6).max(100);
const userAgentValidation = z.string().optional();

export const loginValidation = z.object({
  email: emailValidation,
  password: passwordValidation,
  userAgent: userAgentValidation,
});

export const registerValidation = loginValidation.extend({
    username : z.string().min(3),
    confirmPassword: z.string().min(6).max(100),
})
.refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
   path: ["confirmPassword"],

})