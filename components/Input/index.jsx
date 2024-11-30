// import React from "react";
// import PropTypes from "prop-types";

// const shapes = {
//     round: "rounded-[10px]",
// };

// const variants = {
//     outline: {
//     },
//     black_900_66: "border-black-900_66 border border-solid text-gray-700",
//     fill: {
//         white_A700_14: "bg-white-a700_14 text-black-900_b2",
//     },
// };

// const sizes = {
//     xs: "h-[20px] pl-4 pr-[68px] text-[14px]",
//     sm: "h-[38px] px-2.5 text-[16px]",
//     md: "h-[48px] px-3.5",
// };

// const Input = React.forwardRef(
//     (
//         {
//             className =
//             name =
//             placeholder =
//             type = "text",
//             label =
//             prefix,
//             suffix,
//             onChange,
//             shape, 
//             variant="outline",
//             size="xs",
//             color="white_A700A14",
//             ...restProps
//         },
//         ref,
//     )=> { return (
//         <label
//         className={`${className} fles items-center justify cursor-text border-black-900 border-solid ${shape&& shapes[sahpe]}${variants[variant])} ${size&&sizes[size]}`}
//         >
//             {!!label && label}
//             {!!prefix && prefix}
//             <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} /> 
//             {11suffix && suffix}
//         </label>
//       );
//     },
// );

// Input.propTypes = {
//     className: PropTypes.string, 
//     name: PropTypes.string, 
//     placeholder: PropTypes.string, 
//     type: PropTypes.string,
//     label: PropTypes.string,
//     prefix: PropTypes.node,
//     suffix: PropTypes.node,
//     shape: PropTypes.oneof(["round"]),
//     size: PropTypes.oneof(["xs", "sm", "nd"]),
//     variant: PropTypes.oneOf(["outline", "fill"]),
//     color: PropTypes.oneOf(["black_900_66", "white_A700_14"]),
// };
// export { Input };

    


import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
};

const variants = {
  outline: {
    black_900_66: "border-black-900_66 border border-solid text-gray-700",
  },
  fill: {
    white_A700_14: "bg-white-a700_14 text-black-900_b2",
  },
};

const sizes = {
  xs: "h-[20px] pl-4 pr-[68px] text-[14px]",
  sm: "h-[38px] px-2.5 text-[16px]",
  md: "h-[48px] px-3.5",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "outline",
      size = "xs",
      color = "black_900_66",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center cursor-text ${shape && shapes[shape]} ${
          variants[variant]?.[color]
        } ${size && sizes[size]}`}
      >
        {!!label && <span>{label}</span>}
        {!!prefix && <span>{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          className="flex-1 bg-transparent border-none outline-none"
          {...restProps}
        />
        {!!suffix && <span>{suffix}</span>}
      </label>
    );
  }
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900_66", "white_A700_14"]),
};

export { Input };
