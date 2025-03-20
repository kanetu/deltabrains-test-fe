import { Suspense } from "react";
import { ScrollArea } from "@/components/ui/ScrollArea";
import { Skeleton, SkeletonCard } from "@/components/ui/Skeleton";
import { Product } from "@/types/product";
import EmptyData from "@/components/EmptyData";

type MainContentProps = {
    isLoading: boolean;
    data?: Product[];
};

const MainContent: React.FC<MainContentProps> = ({
    isLoading,
    data,
}: MainContentProps) => {
    return (
        <ScrollArea className="max-h-[2000px] h-[1000px] md:mx-[40px] xl:mx-[40px] 2xl:mx-[40px] md:mt-[20px] w-full p-4">
            {data && data.length === 0 && <EmptyData text="No results found" />}
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[40px]">
                {isLoading &&
                    Array.from({ length: 20 }, (_, index) => (
                        <SkeletonCard key={index} />
                    ))}
            </div>
        </ScrollArea>
    );
};

export default MainContent;
