import { EEvent } from "@/types/eevent";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";

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
    const queryKey = ["events", page, limit, searchTerm];

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

        // Add timeout to increase UX
        await new Promise((resolve) => setTimeout(resolve, 1000));

        let url = `http://localhost:3001/v1/events?${queryParams}`;
        const response = await fetch(url, {
            method: "GET",
        });
        const res = await response;

        return res.json();
    };
    return useQuery<Response>({
        queryKey,
        queryFn,
        staleTime,
    });
};
