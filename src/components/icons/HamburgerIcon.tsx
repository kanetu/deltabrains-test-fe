import { JSX, SVGProps } from "react";

type HamburgerIconProps = {} & JSX.IntrinsicAttributes &
    SVGProps<SVGSVGElement>;

const HamburgerIcon: React.FC<HamburgerIconProps> = (
    props: HamburgerIconProps
) => {
    return (
        <svg
            height="21"
            viewBox="0 0 21 21"
            width="21"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                fillRule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <path d="m4.5 6.5h12" />
                <path d="m4.498 10.5h11.997" />
                <path d="m4.5 14.5h11.995" />
            </g>
        </svg>
    );
};

export default HamburgerIcon;
