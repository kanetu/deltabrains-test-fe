import { FilterFormValues } from "@/features/MarketPlace/components/FilterForm";
import { Product } from "@/types/product";
import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { useDebounce } from "@uidotdev/usehooks";
import { UseFormWatch } from "react-hook-form";

export const useProductQuery = (
    showItems: number,
    setTotalItems: React.Dispatch<React.SetStateAction<number>>,
    watch: UseFormWatch<FilterFormValues>,
    selectedCategory: string
) => {
    const debounceTime = 200;
    const staleTime = 60000; // 60s
    const debouncedSearchTerm = useDebounce(watch("search"), debounceTime);
    const queryKey = [
        "products",
        {
            search: debouncedSearchTerm,
            tier: watch("tier"),
            theme: watch("theme"),
            price: watch("price"),
            priceRange: watch("priceRange"),
            time: watch("time"),
        },
        showItems,
        selectedCategory,

    ];

    const buildFilterParams = (
        { tier, theme, time, price, priceRange, search }: FilterFormValues,
        showItems: number,
        selectedCategory: string
    ) => {
        let sortString = ",";
        sortString += time === "Latest" ? "-createdAt," : "createdAt,";
        sortString += price === "lowToHigh" ? "price" : "-price";
        return new URLSearchParams({
            ...(tier === "All" ? {} : { tier: tier }),
            ...(search ? { title_like: search } : {}),
            ...(selectedCategory === "All" ? {} : { category: selectedCategory }),
            _sort: sortString,
            theme: theme,
            price_gte: priceRange[0].toString(),
            price_lte: priceRange[1].toString(),
            _start: "0",
            _end: showItems.toString(),
        });
    };

    const queryFn = async ({ queryKey }: QueryFunctionContext) => {
        const [_, filterCriterias, showItems, selectedCategory] = queryKey;
        const queryParams = buildFilterParams(
            filterCriterias as FilterFormValues,
            showItems as number,
            selectedCategory as string
        ).toString();

        // Add timeout to increase UX
        const res = await new Promise((resolve) =>
            setTimeout(resolve, 1000)
        ).then(async () => {
            let url = `http://localhost:5005/products?${queryParams}`;
            const response = await fetch(url, {
                method: "GET",
            });
            return await response;
        });
        const totalCount = res.headers.get("X-Total-Count");
        if (totalCount) {
            setTotalItems(Number(totalCount));
        }
        return res.json();
    }
    return useQuery<
        Product[]
    >({
        queryKey,
        queryFn,
        staleTime,
    });
};
