import { z } from "zod";

export const signInSchema = z.object({
    identifier: z.string(),
    password: z.string().min(6, "should be atleast 6 characters long"),
  });