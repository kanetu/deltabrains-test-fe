import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "./Popover";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { vi } from "date-fns/locale";
export type DatePickerProps = {
    date: Date;
    setDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
} & JSX.IntrinsicAttributes;

export const DatePicker: React.FC<DatePickerProps> = ({
    date,
    setDate,
    ...rest
}: DatePickerProps) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon />
                    {date ? (
                        format(date, "yyyy-MM-dd", { locale: vi })
                    ) : (
                        <span>Chọn ngày</span>
                    )}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    {...rest}
                />
            </PopoverContent>
        </Popover>
    );
};
