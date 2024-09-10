import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "action";
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className, ...props }) => {
    const baseClasses =
        "flex gap-2 justify-center items-center self-stretch px-8 py-3 my-auto rounded-xl min-h-[56px] max-md:min-h-[58px] max-md:text-[16px] max-md:px-5 font-extraboldExt hover:-translate-y-1 transition-all duration-200";
    const variantClasses =
        variant === "primary"
            ? "text-cyan-700 bg-white"
            : variant === "action"
            ? "text-white bg-[#75BADB] text-xl min-h-[74px] text-[24px] max-md:min-h-[58px] max-md:text-[16px]"
            : "text-white border border-white border-solid";

    return (
        <button {...props} className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
