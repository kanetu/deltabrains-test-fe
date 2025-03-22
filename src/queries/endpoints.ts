export const getAllEvent = {
    getEndpoint: (queryParams: any) => `/events?${queryParams}`,
    getQueryKeys: (page: number, limit: number, searchTerm: string) => [
        "events",
        page,
        limit,
        searchTerm,
    ],
};

export const createEvent = {
    getEndpoint: () => `/events`,
};
