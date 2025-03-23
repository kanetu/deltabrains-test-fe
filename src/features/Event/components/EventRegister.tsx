import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/RadioGroup";
import { Label } from "@/components/ui/Label";
import { Attendee, attendeeSchema } from "@/types/attendee";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import { useRegisterEventMutation } from "@/queries/event";

type EventRegisterProps = {
    eventId?: string;
};

const EventRegister: React.FC<EventRegisterProps> = ({
    eventId,
}: EventRegisterProps) => {
    const navigate = useNavigate();

    const form = useForm<Attendee>({
        resolver: zodResolver(attendeeSchema),
        defaultValues: {
            fullName: "",
            gender: "Anh",
            phoneNumber: "",
            email: "",
        },
    });

    const registerEventMutation = useRegisterEventMutation();

    const onSubmit = (values: Attendee) => {
        registerEventMutation.mutate(
            {
                eventId: eventId || "",
                attendee: values,
            },
            {
                onSuccess: () => {
                    navigate("/event");
                },
            }
        );
    };
    return (
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
    );
};

export default EventRegister;
