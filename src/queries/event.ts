import axiosClient from "@/lib/axiosClient";
import { EEvent } from "@/types/eevent";
import {
    QueryFunctionContext,
    useMutation,
    useQuery,
    useQueryClient,
} from "@tanstack/react-query";
import {
    createEvent,
    deleteEvent,
    getAllEvent,
    getEventById,
    updateEvent,
} from "./endpoints";
import { defaultStaleTime } from "@/consts/common";

type UseEventQueryResponse = {
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
    return useQuery<UseEventQueryResponse>({
        queryKey,
        queryFn,
        staleTime: defaultStaleTime,
    });
};

type UseEventByIdQueryResponse = {
    data: EEvent & { attendeeCount: number };
    message: string;
    success: boolean;
};

export const useEventByIdQuery = (id: string) => {
    const queryKey = getEventById.getQueryKeys(id);

    const queryFn = async ({ queryKey }: QueryFunctionContext) => {
        const [_, id] = queryKey;

        const { data } = await axiosClient.get(
            getEventById.getEndpoint(id as string)
        );

        return data;
    };
    return useQuery<UseEventByIdQueryResponse>({
        queryKey,
        queryFn,
        staleTime: defaultStaleTime,
    });
};

export const useCreateEventMutation = () => {
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

export const useDeleteEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: string) => {
            return axiosClient.delete(deleteEvent.getEndpoint(id));
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
        },
    });
};

export const useUpdateEventMutation = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: { id: string; newEvent: Partial<EEvent> }) => {
            return axiosClient.put(
                updateEvent.getEndpoint(data.id),
                data.newEvent
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["events"] });
        },
    });
};
