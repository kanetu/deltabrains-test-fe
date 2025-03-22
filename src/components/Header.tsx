import { Link } from "react-router-dom";
import GlobeIcon from "./icons/GlobeIcon";
import { Button } from "./ui/Button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";
import { Sheet, SheetContent, SheetTrigger } from "./ui/Sheet";
import HamburgerIcon from "./icons/HamburgerIcon";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className="header w-full bg-primary text-white z-10 h-[84px] flex justify-center items-center text-[14px]">
            <div className="hidden basis-[950px] font-bold m-auto items-center justify-between sm:hidden md:hidden lg:flex ">
                <div className="text-[25px]">Event Management</div>
                <div className="basis-[300px] items-center justify-center flex">
                    <Link to="/event" className="mr-4">
                        Sự kiện
                    </Link>
                    <Link to="/event" className="mr-4">
                        Người tham gia
                    </Link>
                    <Link to="/event" className="mr-4">
                        Về chúng tôi
                    </Link>
                </div>
            </div>
            <Sheet>
                <SheetTrigger>
                    <HamburgerIcon className="text-white ml-[20px] w-[50px] h-[50px] lg:hidden xl:hidden 2xl:hidden" />
                </SheetTrigger>
                <SheetContent>
                    <div className="flex h-[300px] flex-col items-center justify-between md:basis-3/6 xl:basis-4/6 2xl:basis-4/6">
                        <Link to="/Home">Home</Link>
                        <Link to="/Home">About Us</Link>
                        <Link to="/Home">Our Teams</Link>
                        <Link to="/Home">Marketplace</Link>
                        <Link to="/Home">Roadmap</Link>
                        <Link to="/Home">Whitepaper</Link>
                    </div>
                </SheetContent>
            </Sheet>
        </header>
    );
};

export default Header;
