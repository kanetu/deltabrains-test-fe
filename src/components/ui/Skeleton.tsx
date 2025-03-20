import { cn } from "@/lib/utils";

const Skeleton = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-white/10", className)}
            {...props}
        />
    );
};

const SkeletonCard = () => {
    return (
        <div className="flex flex-col bg-[#3A3841]/60 p-[16px] rounded-[10px] w-[267px]">
            <Skeleton className="h-[230px] w-full rounded-xl" />
            <div className="justify-between flex mt-[24px]">
                <Skeleton className="h-4 w-2/4" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="justify-left flex mt-[24px] items-center">
                <Skeleton className="h-[32px] w-[32px] mr-[12px]" />
                <Skeleton className="h-4 w-[150px]" />
            </div>
        </div>
    );
};

export { Skeleton, SkeletonCard };
