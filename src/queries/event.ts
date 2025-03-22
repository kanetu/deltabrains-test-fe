import axiosClient from "@/lib/axiosClient";
import { EEvent } from "@/types/eevent";
import {
    QueryFunctionContext,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import { createEvent, getAllEvent } from "./endpoints";

type Response = {
    data: {
        events: (EEvent & { attendeeCount: number })[];
        pagination: {
            total: number;
            page: number;
            pageSize: number;
            totalPage: number;
        };
    };
    message: string;
    success: boolean;
};
export const useEventQuery = (
    page: number,
    limit: number,
    searchTerm: string
) => {
    const staleTime = 60000; // 60s

    const queryKey = getAllEvent.getQueryKeys(page, limit, searchTerm);

    const buildFilterParams = (
        page: number,
        limit: number,
        searchTerm: string
    ) => {
        return new URLSearchParams({
            ...(searchTerm ? { search: searchTerm } : {}),
            page: page.toString(),
            limit: limit.toString(),
        });
    };

    const queryFn = async ({ queryKey }: QueryFunctionContext) => {
        const [_, page, limit, searchTerm] = queryKey;
        const queryParams = buildFilterParams(
            page as number,
            limit as number,
            searchTerm as string
        ).toString();

        const { data } = await axiosClient.get(
            getAllEvent.getEndpoint(queryParams)
        );

        return data;
    };
    return useQuery<Response>({
        queryKey,
        queryFn,
        staleTime,
    });
};

export const useEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (newEvent: EEvent) => {
            return axiosClient.post(createEvent.getEndpoint(), newEvent);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
        },
    });
};
