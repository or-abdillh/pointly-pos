import { z } from "zod"
import { OutletSchema } from "./outlet.schema"

export const UserSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    outlets: z.array(OutletSchema),
})

export type User = z.infer<typeof UserSchema>