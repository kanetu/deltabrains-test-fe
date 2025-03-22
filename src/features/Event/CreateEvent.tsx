import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { EEvent, eeventSchema } from "@/types/eevent";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { Textarea } from "@/components/ui/Textarea";
import { useEventMutation } from "@/queries/event";
import { useNavigate } from "react-router-dom";

type CreateEventProps = {};

const CreateEvent: React.FC<CreateEventProps> = (props: CreateEventProps) => {
    const navigate = useNavigate();

    const handleCancel = () => {
        navigate("/event");
    };

    const form = useForm<EEvent>({
        resolver: zodResolver(eeventSchema),
        defaultValues: {
            title: "",
            content: "",
            venue: "",
            maxPerson: 0,
        },
    });

    const eventMutation = useEventMutation();

    const onSubmit = (values: EEvent) => {
        eventMutation.mutate(values);
        navigate("/event");
    };
    return (
        <div className="mx-auto basis-[950px] flex flex-col">
            <h1 className="font-bold text-xl mt-8">Tạo mới sự kiện</h1>
            <div className="flex justify-center w-full border boder-2 py-4 my-2 mb-[20px] rounded-2xl">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8 min-w-xl mt-2"
                    >
                        <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tiêu đề</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Tiêu đề"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="content"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nội dung</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Nội dung"
                                            {...field}
                                        ></Textarea>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Ngày tổ chức</FormLabel>
                                    <FormControl>
                                        <DatePicker
                                            date={field.value}
                                            setDate={field.onChange}
                                            disabled={(date: Date) =>
                                                date < new Date() ||
                                                date < new Date("1900-01-01")
                                            }
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="venue"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Địa điểm</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Địa điểm"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="maxPerson"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Số lượng tối đa</FormLabel>
                                    <FormControl>
                                        <Input
                                            type="number"
                                            placeholder="Số lượng"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end space-x-4">
                            <Button type="submit">Lưu</Button>
                            <Button
                                onClick={handleCancel}
                                variant="destructive"
                                className="text-white"
                            >
                                Hủy
                            </Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CreateEvent;
