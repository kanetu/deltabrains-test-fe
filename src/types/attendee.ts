import { z } from "zod";

export const attendeeSchema = z.object({
    fullName: z
        .string()
        .min(1, "Họ và tên phải chứa ít nhất 1 ký tự")
        .max(20, "Họ và tên chứa tối đa 20 ký tự")
        .nonempty(),
    gender: z.enum(["Anh", "Chị"]),
    email: z.string().email("Email không hợp lệ").nonempty(),
    phoneNumber: z
        .string()
        .regex(
            /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
            "Số điện thoại không hợp lệ (Việt Nam)"
        )
        .nonempty(),
});

type Attendee = z.infer<typeof attendeeSchema>;

export type { Attendee };
