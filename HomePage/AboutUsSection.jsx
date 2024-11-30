import { Heading, Img, Text } from "../../components";
import React from "react";

export default function AboutUsSection() {
  return (
    <>
      <div className="mt-[42px] flex flex-col items-center self-stretch">
        <div className="container-xs flex flex-col gap-[52px] lg:px-5 md:px-5 sm:gap-[26px]">
          <div className="flex flex-col items-center gap-1">
            <Heading
              size="heading2x1"
              as="h2"
              className="font-inter text-[96px] font-extrabold uppercase tracking-[3.84px] text-light_green-900 lg:text-[48px] md:text-[48px]"
            >
              WHAT WE BELIEVE
            </Heading>
            <div className="self-stretch bg-light_green-100 p-2.5"></div>
            <Text
              size="textlg"
              as="p"
              className="text-center text-[36px] font-normal leading-[160%] text-light_green-900 lg:text-[30px] md:text-[30px] sm:text-[28px]"
            >
              <span>
                Supporting local farmers and giving consumers healthier options
                are made possible by the growing demand for fresh,
                nature-produced food.&nbsp;
              </span>
              <span className="font-extrabold">Mazraęty</span>
              <span>
                <>
                  &nbsp;is an online marketplace that provides a platform for
                  the direct sale of fresh vegetables, dairy products, meat, and
                  other farm products between consumers and local farmers.
                  Consumers can peruse, look up local farmers, and arrange for
                  pickups or deliveries.
                  <br />
                  <br />
                </>
              </span>
              <span className="font-extrabold">
                Mazraعty envisions creating a digital bridge between local
                farmers and consumers, simplifying access to farm-fresh
                products. Our goal is to empower small farms by giving them an
                online presence while enabling customers to support local
                businesses and enjoy fresher, healthier produce at competitive
                prices.
              </span>
            </Text>
          </div>

          <div>
            <Img
              src="images/img_image_3.png"
              alt="Decorative Image"
              className="h-[736px] w-full object-cover lg:h-auto md:h-auto"
            />
          </div>

          <div>
            <div className="bg-light_green-100 p-2.5">
              <Heading
                size="headingx1"
                as="h3"
                className="text-center text-[48px] font-extrabold leading-[160%] tracking-[-0.48px] text-light_green-900 lg:text-[34px] md:text-[34px]"
              >
                <span>Mazraعty</span>
                <span className="font-medium">
                  &nbsp;farmers cultivate a variety of&nbsp;
                </span>
                <span>FRESH</span>
                <span className="font-medium">,&nbsp;</span>
                <span>FAVORABLE</span>
                <span className="font-medium">
                  &nbsp;vegetables and fruits, ensuring quality produce from
                  farm to table.
                </span>
              </Heading>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
