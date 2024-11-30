import { z } from "zod";

export const RegisterRequestSchema = z.object({
    name: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
})

export type RegisterRequest = z.infer<typeof RegisterRequestSchema>