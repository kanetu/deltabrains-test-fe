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
import { Button } from "@/components/ui/Button";
import { useEventByIdQuery, useDeleteEventMutation } from "@/queries/event";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Attendee, attendeeSchema } from "@/types/attendee";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Label } from "@/components/ui/Label";
import { Card } from "@/components/ui/Card";
import { format } from "date-fns";
import { defaultFormatDate } from "@/consts/common";
import { vi } from "date-fns/locale";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/AlertDialog";
import { toast } from "sonner";

type ViewEventProps = {};

const ViewEvent: React.FC<ViewEventProps> = (props: ViewEventProps) => {
    const navigate = useNavigate();
    const params = useParams();

    const handleCancel = () => {
        navigate("/event");
    };

    const { data } = useEventByIdQuery(params.id || "");

    const form = useForm<Attendee>({
        resolver: zodResolver(attendeeSchema),
        defaultValues: {
            fullName: "",
            gender: "Anh",
            phoneNumber: "",
            email: "",
        },
    });

    const deleteEventMutation = useDeleteEventMutation();

    const onSubmit = (values: Attendee) => {
        // eventMutation.mutate(values);
        // navigate("/event");
        console.log(">>>", values);
    };

    const handleDeleteEvent = () => {
        deleteEventMutation.mutate(params.id || "");
        toast("Xóa sự kiện thành công");
        navigate("/event");
    };
    return (
        <div className="mx-auto basis-[950px] flex flex-col">
            <div className="">
                <h1 className="font-bold text-xl mt-8">Thông tin sự kiện</h1>
                <Card className="py-4 px-8 flex space-y-4 flex-col">
                    <div className="flex flex-col">
                        <Label>Tiêu đề:</Label>
                        <span className="text-sm font-bold">
                            {data?.data.title}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <Label>Nội dung:</Label>
                        <span className="text-sm">{data?.data.content}</span>
                    </div>
                    <div className="flex flex-col">
                        <Label>Ngày tổ chức:</Label>
                        <span className="text-sm">
                            {data?.data.date
                                ? format(
                                      new Date(data?.data.date),
                                      defaultFormatDate,
                                      {
                                          locale: vi,
                                      }
                                  )
                                : ""}
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <Label>Địa điểm:</Label>
                        <span className="text-sm">{data?.data.venue}</span>
                    </div>
                    <div className="flex flex-col">
                        <Label>Số người tham gia hiện tại:</Label>
                        <span className="text-sm">{data?.data.maxPerson}</span>
                    </div>

                    <div className="flex justify-end space-x-4">
                        <Button>Đăng ký</Button>
                        <Button>Chỉnh sửa</Button>
                        <AlertDialog>
                            <AlertDialogTrigger>
                                <Button
                                    variant="destructive"
                                    className="text-white"
                                >
                                    Xóa
                                </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                                <AlertDialogHeader>
                                    <AlertDialogTitle>
                                        Bạn có chắc chắn muốn xóa sự kiện này ?
                                    </AlertDialogTitle>
                                    <AlertDialogDescription>
                                        Sau khi xóa sự kiện sẽ không thể khôi
                                        phục!
                                    </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogCancel>Hủy</AlertDialogCancel>
                                    <AlertDialogAction
                                        onClick={handleDeleteEvent}
                                    >
                                        Tiếp tục xóa
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                        </AlertDialog>
                    </div>
                </Card>
            </div>
            <div>
                <h1 className="font-bold text-xl mt-8">Đăng ký sự kiện</h1>
                <div className="flex justify-center w-full border boder-2 py-4 my-2 mb-[20px] rounded-2xl">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-8 min-w-xl mt-2"
                        >
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Họ tên</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Họ tên"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="gender"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Giới tính</FormLabel>
                                        <FormControl>
                                            <RadioGroup
                                                onValueChange={field.onChange}
                                                value={field.value}
                                            >
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value="Anh"
                                                        id="option-one"
                                                    />
                                                    <Label htmlFor="option-one">
                                                        Anh
                                                    </Label>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <RadioGroupItem
                                                        value="Chị"
                                                        id="option-two"
                                                    />
                                                    <Label htmlFor="option-two">
                                                        Chị
                                                    </Label>
                                                </div>
                                            </RadioGroup>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                type="email"
                                                placeholder="Email"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="phoneNumber"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Số điện thoại</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Số điện thoại"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex justify-end space-x-4">
                                <Button type="submit">Đăng ký</Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default ViewEvent;
