import { Skeleton } from "@/components/ui/Skeleton";
import {
    priceOptions,
    themeOptions,
    tierOptions,
    timeOptions,
} from "@/consts/common";
import { useProductQuery } from "@/queries";
import { lazy, Suspense, useState } from "react";
import { useForm } from "react-hook-form";

export type FilterFormValues = {
    search: string;
    tier: string;
    theme: string;
    priceRange: number[];
    price: string;
    time: string;
};

const FilterForm = lazy(() => import("./components/FilterForm"));
const MainContent = lazy(() => import("./components/MainContent"));

const MarketPlace = () => {
    const [showItems, setShowItems] = useState(20);
    const [totalItems, setTotalItems] = useState(100);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const defaultValues = {
        search: "",
        tier: tierOptions[1].value,
        theme: themeOptions[1].value,
        price: priceOptions[0].value,
        time: timeOptions[0].value,
        priceRange: [10, 100],
    };

    const form = useForm<FilterFormValues>({
        defaultValues,
        mode: "onChange",
    });

    const { watch } = form;

    const increaseItems = () => {
        setShowItems((pre) => pre + 20);
    };

    const productQuery = useProductQuery(
        showItems,
        setTotalItems,
        watch,
        selectedCategory
    );
    const { data, isLoading, refetch } = productQuery;

    const onSubmit = () => {
        refetch();
    };

    return (
        <div className="my-[5%] mx-[5%] flex justify-center">
            {/* <div className="flex flex-col md:flex-col lg:flex-row">
                <div className="text-white font-[Inter] md:w-full lg:w-[380px] mg">
                    <Suspense fallback={<Skeleton />}>
                        <FilterForm form={form} onSubmit={onSubmit} />
                    </Suspense>
                </div>
                <div>
                    <div className="px-[56px]"></div>
                    <Suspense fallback={<Skeleton />}>
                        <MainContent data={data} isLoading={isLoading} />
                    </Suspense>
                </div>
            </div> */}
        </div>
    );
};

export default MarketPlace;
