import { Img, Text } from "./..";
import React from "react";

 function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex self-stretch justify-center items-start mt-[102px] py-[124px] lg:py-8 md:py-5 sm:py-4 bg-light_green-900`}
    >
      <div className="container-xs mb-1.5 flex justify-center px-4 lg:px-5 md:px-5">
        <div className="flex w-[96%] items-center justify-between gap-5 lg:w-full md:w-full md:flex-col">
          <div className="flex w-[56%] items-center justify-between gap-5 md:w-full sm:flex-col">
            <div className="flex items-center gap-2">
              <Img
                src="images/img_leaf_white_a700.svg"
                alt="Leaf Image"
                className="h-[82px] w-[38%] object-contain"
              />
              <Text className="mb-2 self-end text-[32px] font-bold text-white-a700 lg:text-[27px] md:text-[26px] sm:text-[24px]">
                Mazraعty
              </Text>
            </div>
            <div className="flex items-center gap-3.5">
              <Img
                src="images/img_user_white_a700.svg"
                alt="User Icon"
                className="h-[46px]"
              />
              <Text className="self-end text-[24px] font-bold text-white-a700 lg:text-[20px]">
                2020-2024 Mazraعty Inc.
              </Text>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Img
              src="images/img_image_8.png"
              alt="Social Icon 1"
              className="h-[44px] w-[32%] object-contain"
            />
            <Img
              src="images/img_image_10.png"
              alt="Social Icon 2"
              className="h-[62px] w-[36%] object-contain"
            />
            <Img
              src="images/img_image_11.png"
              alt="Social Icon 3"
              className="h-[62px] w-[32%] object-contain"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
export default{Footer};
