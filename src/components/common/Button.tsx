import React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant: "primary" | "secondary" | "action";
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, variant, onClick, className }) => {
    const baseClasses =
        "flex gap-2 justify-center items-center self-stretch px-8 py-3 my-auto rounded-xl min-h-[56px] max-md:px-5 font-extraboldExt";
    const variantClasses =
        variant === "primary"
            ? "text-cyan-700 bg-white"
            : variant === "action"
            ? "text-white bg-[#75BADB] text-xl"
            : "text-white border border-white border-solid";

    return (
        <button className={`${baseClasses} ${variantClasses} ${className}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;
