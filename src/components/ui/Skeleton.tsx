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

const SkeletonEventDetail = () => {
    return (
        <div className="flex flex-col bg-muted p-[16px] rounded-[10px] w-full mt-5">
            <div>
                <Skeleton className="h-8 w-2/4" />
            </div>
            <div className="justify-between flex flex-col mt-[24px] space-y-8">
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-6 w-1/4" />
                <Skeleton className="h-6 w-1/4" />
            </div>

            <div className="justify-end flex mt-[24px] items-center space-x-4">
                <Skeleton className="h-8 w-[70px]" />
                <Skeleton className="h-8 w-[70px]" />
                <Skeleton className="h-8 w-[70px]" />
            </div>
        </div>
    );
};

const SkeletonEventRegister = () => {
    return (
        <div className="flex flex-col bg-muted p-[16px] rounded-[10px] w-full mt-5">
            <div>
                <Skeleton className="h-8 w-2/4" />
            </div>
            <div className="flex justify-center mt-8">
                <div className="flex-col flex">
                    <div className="space-y-8 min-w-xl mt-2">
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                        <Skeleton className="h-6 w-3/4" />
                    </div>
                    <div className="justify-end flex mt-[24px] items-center space-x-4">
                        <Skeleton className="h-8 w-[70px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export {
    Skeleton,
    SkeletonListEvent,
    SkeletonEventDetail,
    SkeletonEventRegister,
};
