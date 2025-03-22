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
import { EEvent } from "@/types/eevent";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useDeleteEventMutation } from "@/queries/event";
import { Label } from "@/components/ui/Label";

type EventDetailProps = {
    eventId?: string;
    data?: EEvent & { attendeeCount: number };
    setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
};

const EventDetail: React.FC<EventDetailProps> = ({
    eventId,
    data,
    setIsRegister,
}: EventDetailProps) => {
    const navigate = useNavigate();
    const deleteEventMutation = useDeleteEventMutation();

    const handleDeleteEvent = () => {
        deleteEventMutation.mutate(eventId || "");
        navigate("/event");
    };

    const handleClickRegister = () => {
        setIsRegister((prev) => !prev);
    };
    return (
        <div className="">
            <h1 className="font-bold text-xl mt-8">Thông tin sự kiện</h1>
            <Card className="py-4 px-8 flex space-y-4 flex-col">
                <div className="flex flex-col">
                    <Label>Tiêu đề:</Label>
                    <span className="text-sm font-bold">{data?.title}</span>
                </div>
                <div className="flex flex-col">
                    <Label>Nội dung:</Label>
                    <span className="text-sm">{data?.content}</span>
                </div>
                <div className="flex flex-col">
                    <Label>Ngày tổ chức:</Label>
                    <span className="text-sm">
                        {data?.date
                            ? format(new Date(data?.date), defaultFormatDate, {
                                  locale: vi,
                              })
                            : ""}
                    </span>
                </div>
                <div className="flex flex-col">
                    <Label>Địa điểm:</Label>
                    <span className="text-sm">{data?.venue}</span>
                </div>
                <div className="flex flex-col">
                    <Label>Số người tham gia hiện tại:</Label>
                    <span className="text-sm">
                        {data?.attendeeCount}/{data?.maxPerson}
                    </span>
                </div>

                <div className="flex justify-end space-x-4">
                    <Button onClick={handleClickRegister}>Đăng ký</Button>
                    <Button>Chỉnh sửa</Button>
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
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
                                    Sau khi xóa sự kiện sẽ không thể khôi phục!
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Hủy</AlertDialogCancel>
                                <AlertDialogAction onClick={handleDeleteEvent}>
                                    Tiếp tục xóa
                                </AlertDialogAction>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </div>
            </Card>
        </div>
    );
};

export default EventDetail;
