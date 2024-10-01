import { z } from "zod";

export const usernameValidation = z
  .string()
  .min(2, "Username must be atleast 2 characters")
  .max(50, "Username should be at max 50 chars");

export const signUpSchema = z.object({
  username: usernameValidation,
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z.string().min(6, "should be atleast 6 characters long"),
});
