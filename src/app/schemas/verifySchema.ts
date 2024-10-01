import { z } from "zod";

export const verfifySchema = z.object({
  code: z.string().length(6, "Verfication code should be 6 characters long"),
});
