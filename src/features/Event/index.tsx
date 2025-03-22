import { Outlet } from "react-router-dom";

const Event = () => {
    return (
        <div className="mx-auto basis-[950px] flex flex-col">
            <Outlet />
        </div>
    );
};

export default Event;
