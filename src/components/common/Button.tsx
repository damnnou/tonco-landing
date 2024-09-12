import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "action";
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className, ...props }) => {
    const baseClasses =
        "flex gap-2 justify-center items-center self-stretch py-2 my-auto rounded-xl min-h-[48px] max-md:min-h-[58px] max-md:text-[16px] max-md:px-5 font-extraboldExt hover:-translate-y-1 transition-all duration-200";
    const variantClasses =
        variant === "primary"
            ? "text-cyan-700 bg-white px-5"
            : variant === "action"
            ? "text-white bg-[#75BADB] text-xl min-h-[74px] text-[24px] max-md:min-h-[58px] md:h-[74px] max-md:text-[16px] px-8"
            : "text-white border border-white border-solid px-5";

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
