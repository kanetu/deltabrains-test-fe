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

export const deleteEvent = {
    getEndpoint: (id: string) => `/events/${id}`,
};

export const updateEvent = {
    getEndpoint: (id: string) => `/events/${id}`,
};

export const getEventById = {
    getEndpoint: (id: string) => `/events/${id}`,
    getQueryKeys: (id: string) => ["event", id],
};

export const registerEvent = {
    getEndpoint: (id: string) => `/register/${id}`,
};
