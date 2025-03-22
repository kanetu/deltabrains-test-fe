import { Skeleton, SkeletonListEvent } from "@/components/ui/Skeleton";
import React, { ChangeEvent } from "react";
import { lazy, Suspense, useState } from "react";
import { useForm } from "react-hook-form";

const ListEvent = lazy(() => import("./components/ListEvent"));

const Event = () => {
    // const form = useForm<FilterFormValues>({
    //     defaultValues,
    //     mode: "onChange",
    // });

    // const { watch } = form;

    // const increaseItems = () => {
    //     setShowItems((pre) => pre + 20);
    // };

    // const onSubmit = () => {};

    return (
        <div className="mx-auto basis-[950px] flex flex-col">
            <Suspense fallback={<SkeletonListEvent />}>
                <ListEvent />
            </Suspense>
        </div>
    );
};

export default Event;
