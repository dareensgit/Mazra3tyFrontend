// import React from "react";

// const Img =({className, src="defaultNoDate.png", alt="testImg",...restProps})=>{
//     return <img className={className src={src} alt={alt}{...restProps} loading={"lazy"}/>;
// };
// export{Img};

import React from "react";

const Img = ({ className, src = "defaultNoDate.png", alt = "testImg", ...restProps }) => {
  return (
    <img
      className={className}
      src={src}
      alt={alt}
      {...restProps}
      loading="lazy"
    />
  );
};

export { Img };


