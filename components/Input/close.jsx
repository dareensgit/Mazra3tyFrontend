// import React from "react";
// const CloseSVG=({fillcolor="#000000",className="",..props})=>{
//     return(
//         <svg
//         fill={fillcolor}
//         xmlns="http://www.w3.org/2000/svg"
//         className={className}
//         {...props}
//         height={props?.width|| 20}
//         width={props?.height||20}
//         viewBox={`0 0 ${props?.width||20 ${props?.height||20`}
//         >
//          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"/>
//          </svg>
//     );
// };
// export { CloseSVG };

import React from "react";

const CloseSVG = ({ fillcolor = "#000000", className = "", ...props }) => {
  return (
    <svg
      fill={fillcolor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
      height={props?.height || 20}
      width={props?.width || 20}
      viewBox={`0 0 ${props?.width || 20} ${props?.height || 20}`}
    >
      <path d="M4.7070312 3.2929688 L3.2929688 4.7070312 L10.585938 12 L3.2929688 19.292969 L4.7070312 20.707031 L19.292969 20.707031 L20.707031 19.292969 L13.414062 12 L20.707031 4.7070312 L19.292969 3.2929688 L12 10.585938 L4.7070312 3.2929688 z" />
    </svg>
  );
};

export { CloseSVG };
