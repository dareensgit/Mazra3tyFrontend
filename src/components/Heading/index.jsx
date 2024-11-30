import React from "react";

// Define sizes for the Heading component
const sizes = {
    textxl: "text-[40px] font-medium lg:text-[34px] md:text-[38px] sm:text-[36px]",
    headingxs: "text-[16px] font-semibold lg:text-[13px]",
    headings: "text-[24px] font-bold lg:text-[20px] md:text-[22px]",
    headingmd: "text-[25px] font-bold lg:text-[21px] md:text-[23px] sm:text-[21px]",
    headinglg: "text-[36px] font-bold lg:text-[30px] md:text-[34px] sm:text-[32px]",
    headingxl: "text-[40px] font-extrabold lg:text-[34px] md:text-[38px] sm:text-[36px]",
    heading2xl: "text-[96px] font-extrabold lg:text-[72px] md:text-[48px]",
};

const Heading = ({ children, className = "", size = "headingxs", as = "h6", ...restProps }) => {
    const Component = as; // Default to the provided "as" prop or use "h6" as fallback
    return (
        <Component
            className={`text-light-green-900 font-inter ${className} ${sizes[size] || sizes.headingxs}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };
