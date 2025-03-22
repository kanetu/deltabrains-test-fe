import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { ChangeEvent, useState } from "react";
import { EventColumns } from "./components/EventColumns";
import { useEventQuery } from "@/queries/event";
import { useDebounce } from "@uidotdev/usehooks";
import { debounceSearchTermTime } from "@/consts/common";
import { useNavigate } from "react-router-dom";

type ListEventProps = {};

const ListEvent: React.FC<ListEventProps> = (props: ListEventProps) => {
    const navigate = useNavigate();

    const handleCreateEvent = () => {
        navigate("/event/add");
    };
    const [searchTerm, setSearchTerm] = useState("");

    const [pagination, setPagination] = useState({
        pageIndex: 0,
        pageSize: 10,
    });

    const debouncedSearchTerm = useDebounce(searchTerm, debounceSearchTermTime);

    const { data } = useEventQuery(
        pagination.pageIndex,
        pagination.pageSize,
        debouncedSearchTerm
    );

    const table = useReactTable({
        data: data?.data.events || [],
        columns: EventColumns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        manualPagination: true,
        rowCount: data?.data.pagination.total,
        pageCount: data?.data.pagination.totalPage,
        state: {
            pagination,
        },
    });

    const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };
    return (
        <div>
            <div className="w-full flex justify-end mt-5">
                <Button onClick={handleCreateEvent}>+ Event</Button>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2 mb-2">
                <Input
                    type="text"
                    placeholder="Search by title..."
                    onChange={handleChangeSearch}
                />
            </div>
            <div className="w-full rounded-md border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                      header.column.columnDef
                                                          .header,
                                                      header.getContext()
                                                  )}
                                        </TableHead>
                                    );
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell
                                    colSpan={EventColumns.length}
                                    className="h-24 text-center"
                                >
                                    No results.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Next
                </Button>

                <Select
                    onValueChange={(value) => {
                        table.setPageSize(Number(value));
                    }}
                    value={table.getState().pagination.pageSize.toString()}
                >
                    <SelectTrigger className="max-w-[80px]">
                        <SelectValue placeholder="Theme" />
                    </SelectTrigger>
                    <SelectContent className="">
                        {[10, 30, 50].map((pageSize) => (
                            <SelectItem
                                key={pageSize}
                                value={pageSize.toString()}
                            >
                                {pageSize}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default ListEvent;
