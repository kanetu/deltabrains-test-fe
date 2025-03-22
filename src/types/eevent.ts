import { z } from "zod";

export const eeventSchema = z.object({
    title: z.string().min(1).max(100).nonempty(),
    content: z.string().min(1).max(500).nonempty(),
    venue: z.string().min(1).max(200).nonempty(),
    date: z.coerce.date().refine((value) => new Date(value) >= new Date(), {
        message: "The date must be after today",
    }),
    maxPerson: z.coerce.number().int().min(1).max(100),
});

type EEvent = z.infer<typeof eeventSchema>;

export type { EEvent };
