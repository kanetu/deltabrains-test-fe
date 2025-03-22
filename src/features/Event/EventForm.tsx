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
import { EEvent, eeventSchema, getEditEventSchema } from "@/types/eevent";
import { Button } from "@/components/ui/Button";
import { DatePicker } from "@/components/ui/DatePicker";
import { Textarea } from "@/components/ui/Textarea";
import {
    useCreateEventMutation,
    useEventByIdQuery,
    useUpdateEventMutation,
} from "@/queries/event";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type EventFormProps = {};

const EventForm: React.FC<EventFormProps> = (props: EventFormProps) => {
    const navigate = useNavigate();
    const params = useParams();
    const isEdit = !!params.id;

    const handleCancel = () => {
        navigate("/event");
    };

    const createEventMutation = useCreateEventMutation();
    const updateEventMutation = useUpdateEventMutation();

    const { data, refetch } = useEventByIdQuery(params.id || "", false, false);

    const form = useForm<EEvent>({
        resolver: zodResolver(
            isEdit
                ? getEditEventSchema(data?.data.attendeeCount || 0)
                : eeventSchema
        ),
        defaultValues: {
            title: "",
            content: "",
            venue: "",
            maxPerson: 0,
        },
        values: data
            ? {
                  title: data.data.title || "",
                  content: data.data.content || "",
                  date: data.data.date || new Date(),
                  venue: data.data.venue || "",
                  maxPerson: data.data.maxPerson || 0,
              }
            : undefined,
    });

    useEffect(() => {
        if (isEdit) {
            refetch();
        }
    }, [isEdit, refetch]);

    console.log("?>");

    const onSubmit = (values: EEvent) => {
        if (isEdit) {
            updateEventMutation.mutate({
                newEvent: values,
                id: params.id || "",
            });
        } else {
            createEventMutation.mutate(values);
        }
        navigate("/event");
    };

    const title = isEdit ? "Cập nhật sự kiện" : "Tạo mới sự kiện";
    return (
        <div>
            <h1 className="font-bold text-xl mt-8">{title}</h1>
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

export default EventForm;
