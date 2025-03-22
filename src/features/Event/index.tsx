import { SkeletonListEvent } from "@/components/ui/Skeleton";
import { lazy, Suspense } from "react";
import { Outlet } from "react-router-dom";

// const ListEvent = lazy(() => import("./components/ListEvent"));

const Event = () => {
    return (
        <div className="mx-auto basis-[950px] flex flex-col">
            <Outlet />
        </div>
    );
};

export default Event;
