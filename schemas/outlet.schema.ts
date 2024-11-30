import { z } from "zod";

export const OutletSchema = z.object({
    uuid: z.string().uuid(),
    name: z.string(),
    description: z.string().optional(),
})