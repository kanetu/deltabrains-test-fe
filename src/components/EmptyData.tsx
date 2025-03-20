import { cn } from "@/lib/utils";

type EmptyDataProps = {
    text?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const EmptyData: React.FC<EmptyDataProps> = ({
    text,
    className,
    ...props
}: EmptyDataProps) => {
    return (
        <div
            className={cn(
                "w-full border-2 text-white border-white h-[100px] flex items-center justify-center text-[16px] font-[Inter]",
                className
            )}
            {...props}
        >
            {text ? text : "Empty Data"}
        </div>
    );
};

export default EmptyData;
