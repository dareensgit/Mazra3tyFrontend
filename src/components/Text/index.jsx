import React from "react";

// Define text sizes for the Text component
const sizes = {
    textxs: "text-[14px] font-normal",
    texts: "text-[16px] font-normal lg:text-[13px]",
    textmd: "text-[18px] font-normal lg:text-[15px]",
    textlg: "text-[36px] font-normal lg:text-[30px] md:text-[34px] sm:text-[32px]",
    text2xl: "text-[64px] font-normal lg:text-[64px] md:text-[48px]",
};

const Text = ({ children, className = "", as = "p", size = "textxs", ...restProps }) => {
    const Component = as; // Default to the provided "as" prop or fallback to "p"
    return (
        <Component
            className={`text-gray-700 font-poppins ${className} ${sizes[size] || sizes.textxs}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Text };
