import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  fill: {
    white_A700: "bg-white-a700 shadow-xs text-black-900_89",
    blue_A400: "bg-blue-a400 text-white-a700",
    light_green_900: "bg-light_green-900 text-white-a700",
  },
};

const sizes = {
  md: "h-[64px] px-7 text-[24px]",
  xs: "h-[48px] px-3.5 text-[16px]",
  sm: "h-[54px] pl-3.5 pr-[34px] text-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "sm",
  color = "light_green_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["md", "xs", "sm"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["white_A700", "blue_A400", "light_green_900"]),
};

export { Button };
