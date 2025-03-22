import { useEventByIdQuery } from "@/queries/event";
import { useParams } from "react-router-dom";

import { lazy, Suspense, useState } from "react";
import {
    SkeletonEventDetail,
    SkeletonEventRegister,
} from "@/components/ui/Skeleton";

type ViewEventProps = {};

const EventDetail = lazy(() => import("./components/EventDetail"));
const EventRegister = lazy(() => import("./components/EventRegister"));

const ViewEvent: React.FC<ViewEventProps> = (props: ViewEventProps) => {
    const params = useParams();
    const [isRegister, setIsRegister] = useState(false);

    const { data } = useEventByIdQuery(params.id || "");

    return (
        <div>
            <Suspense fallback={<SkeletonEventDetail />}>
                <EventDetail
                    eventId={params.id}
                    data={data?.data}
                    setIsRegister={setIsRegister}
                />
            </Suspense>
            {isRegister && (
                <Suspense fallback={<SkeletonEventRegister />}>
                    <EventRegister eventId={params.id} />
                </Suspense>
            )}
        </div>
    );
};

export default ViewEvent;
