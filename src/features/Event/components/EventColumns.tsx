import { defaultFormatDate } from "@/consts/common";
import { EEvent } from "@/types/eevent";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import { Link } from "react-router-dom";

export const EventColumns: ColumnDef<EEvent & { id: string }>[] = [
    {
        accessorKey: "title",
        header: "Tiêu đề",
        cell: ({ row }) => {
            const original = row.original;
            return (
                <div className="capitalize font-medium hover:underline">
                    <Link to={`/event/${original.id}`}>
                        {row.getValue("title")}
                    </Link>
                </div>
            );
        },
    },
    {
        accessorKey: "date",
        header: "Ngày tổ chức",
        cell: ({ row }) => (
            <div>
                {format(new Date(row.getValue("date")), defaultFormatDate, {
                    locale: vi,
                })}
            </div>
        ),
    },
    {
        accessorKey: "venue",
        header: "Địa điểm",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("venue")}</div>
        ),
    },
    {
        accessorKey: "attendeeCount",
        header: "Số người tham gia hiện tại",
        cell: ({ row }) => (
            <div className="lowercase">
                {row.getValue("attendeeCount")}/{row.original.maxPerson}
            </div>
        ),
    },
];
