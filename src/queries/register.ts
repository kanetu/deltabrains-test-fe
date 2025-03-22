import axiosClient from "@/lib/axiosClient";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerEvent } from "./endpoints";
import { Attendee } from "@/types/attendee";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const useRegisterEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { eventId: string; attendee: Attendee }) => {
            return axiosClient.post(
                registerEvent.getEndpoint(data.eventId),
                data.attendee
            );
        },
        onSuccess: () => {
            toast("Đăng ký tham gia sự kiện thành công"),
                queryClient.invalidateQueries({ queryKey: ["events"] });
        },
        onError: (error: AxiosError) => {
            console.log(error);
            toast(`Đăng ký tham gia sự kiện thất bại`, {
                description: (error?.response?.data as { message: string })
                    .message,
            });
        },
    });
};
