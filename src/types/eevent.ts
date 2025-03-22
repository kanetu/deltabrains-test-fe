import { z } from "zod";

export const eeventSchema = z.object({
    title: z
        .string()
        .min(1, "Tiêu đề phải chứa ít nhất 1 ký tự")
        .max(100, "Tiêu đề phải chứa tối đa 100 ký tự")
        .nonempty(),
    content: z
        .string()
        .min(1, "Nội dung phải chứa ít nhất 1 ký tự")
        .max(500, "Nội dung phải chứa tối đa 100 ký tự")
        .nonempty(),
    venue: z
        .string()
        .min(1, "Địa điểm phải chứa ít nhất 1 ký tự")
        .max(200, "Địa điểm phải chứa tối đa 200 ký tự")
        .nonempty(),
    date: z.coerce.date().refine((value) => new Date(value) >= new Date(), {
        message: "Ngày phải sau ngày hôm nay",
    }),
    maxPerson: z.coerce
        .number()
        .int()
        .min(1, "Số lượng tối đa phải lớn hơn hoặc bằng 1")
        .max(100, "Số lượng tối đa phải nhỏ hơn hoặc bằng 100"),
});

type EEvent = z.infer<typeof eeventSchema>;

export type { EEvent };
