import SearchIcon from "@/components/icons/SearchIcon";
import { Button } from "@/components/ui/Button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/Select";
import { Slider } from "@/components/ui/Slider";
import {
    priceOptions,
    themeOptions,
    tierOptions,
    timeOptions,
} from "@/consts/common";
import React from "react";
import { UseFormReturn } from "react-hook-form";

export type FilterFormValues = {
    search: string;
    tier: string;
    theme: string;
    priceRange: number[];
    price: string;
    time: string;
};
type FilterFormProps = {
    form: UseFormReturn<FilterFormValues, any, undefined>;
    onSubmit: () => void;
};

const FilterForm: React.FC<FilterFormProps> = ({
    form,
    onSubmit,
}: FilterFormProps) => {
    const { control, handleSubmit, reset } = form;

    const onReset = () => {
        reset();
    };
    return (
        <Form {...form}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="relative">
                    <FormField
                        control={control}
                        name="search"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Quick search"
                                        className="pl-[48px] h-[44px]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <SearchIcon className="absolute top-[10px] left-[16px]" />
                </div>

                <FormField
                    control={control}
                    name="priceRange"
                    render={({ field }) => (
                        <FormItem className="my-[40px]">
                            <FormLabel className="text-[16px] font-semibold uppercase">
                                Price
                            </FormLabel>
                            <FormControl>
                                <Slider
                                    max={200}
                                    min={0.01}
                                    step={1}
                                    onValueChange={field.onChange}
                                    value={field.value}
                                    className="mt-[20px]"
                                />
                            </FormControl>
                            <div className="flex justify-between mt-[20px]">
                                <div>
                                    <span className="mr-1">0.01</span>
                                    <span>ETH</span>
                                </div>
                                <div>
                                    <span className="mr-1">200</span>
                                    <span>ETH</span>
                                </div>
                            </div>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div>
                    <FormField
                        control={control}
                        name="tier"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                    Tier
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger
                                            id="tier"
                                            className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                        >
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                            {React.Children.toArray(
                                                tierOptions.map((op) => (
                                                    <SelectItem
                                                        key={op.id}
                                                        value={op.value}
                                                    >
                                                        {op.text}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={control}
                        name="theme"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                    Theme
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger
                                            id="theme"
                                            className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                        >
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                            {React.Children.toArray(
                                                themeOptions.map((op) => (
                                                    <SelectItem
                                                        key={op.id}
                                                        value={op.value}
                                                    >
                                                        {op.text}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={control}
                        name="time"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                    Time
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger
                                            id="time"
                                            className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                        >
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                            {React.Children.toArray(
                                                timeOptions.map((op) => (
                                                    <SelectItem
                                                        key={op.id}
                                                        value={op.value}
                                                    >
                                                        {op.text}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div>
                    <FormField
                        control={control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-[16px] font-semibold uppercase text-[#89888B]">
                                    Price
                                </FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        value={field.value}
                                    >
                                        <SelectTrigger
                                            id="price"
                                            className="w-full border-[#3A3841] mt-[12px] mb-[24px] h-[44px] [&>span]:text-white"
                                        >
                                            <SelectValue placeholder="Theme" />
                                        </SelectTrigger>
                                        <SelectContent className="text-white bg-[#3A3841] border-[#3A3841]">
                                            {React.Children.toArray(
                                                priceOptions.map((op) => (
                                                    <SelectItem
                                                        key={op.id}
                                                        value={op.value}
                                                    >
                                                        {op.text}
                                                    </SelectItem>
                                                ))
                                            )}
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex items-center justify-between w-full">
                    <Button
                        variant="link"
                        className="text-white no-underline"
                        onClick={onReset}
                    >
                        <span className="bg-[#FBC625] rounded-full h-[18px] text-black w-[18px] leading-[18px] rotate-90 align-middle">
                            x
                        </span>
                        Reset filter
                    </Button>
                    <Button
                        type="submit"
                        className="bg-linear-to-r from-[#DA458F] to-[#DA34DD] p-[10px_56px] font-[Inter] text-[16px] font-semibold"
                    >
                        Search
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default FilterForm;
