import { EEvent } from "@/types/eevent";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { vi } from "date-fns/locale";

export const EventColumns: ColumnDef<EEvent>[] = [
    {
        accessorKey: "title",
        header: "Title",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("title")}</div>
        ),
    },
    {
        accessorKey: "date",
        header: "Date",
        cell: ({ row }) => (
            <div>
                {format(new Date(row.getValue("date")), "EEEE dd-MM-yyyy", {
                    locale: vi,
                })}
            </div>
        ),
    },
    {
        accessorKey: "venue",
        header: "Venue",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("venue")}</div>
        ),
    },
    {
        accessorKey: "attendeeCount",
        header: "Attendee",
        cell: ({ row }) => (
            <div className="lowercase">{row.getValue("attendeeCount")}</div>
        ),
    },
];
