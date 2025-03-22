import { cn } from "@/lib/utils";

const Skeleton = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn("animate-pulse rounded-md bg-white", className)}
            {...props}
        />
    );
};

const SkeletonListEvent = () => {
    return (
        <div className="flex flex-col bg-muted p-[16px] rounded-[10px] w-full mt-5">
            <div className="flex justify-end">
                <Skeleton className="h-8 w-1/8" />
            </div>
            <div>
                <Skeleton className="h-8 w-2/4" />
            </div>
            <div className="justify-between flex mt-[24px] space-x-8">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="justify-between flex mt-[24px] space-x-8">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="justify-between flex mt-[24px] space-x-8">
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
                <Skeleton className="h-4 w-1/4" />
            </div>
            <div className="justify-end flex mt-[24px] items-center space-x-4">
                <Skeleton className="h-[32px] w-[62px]" />
                <Skeleton className="h-[32px] w-[62px]" />
                <Skeleton className="h-[32px] w-[62px]" />
            </div>
        </div>
    );
};

export { Skeleton, SkeletonListEvent };
