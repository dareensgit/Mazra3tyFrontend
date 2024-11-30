import { Button, Text, Img, Heading } from "./..";
import React from "react";

export default function Header({ ...props }) {
    return (
        <header
            {...props}
            className={`${props.className} flex md:flex-col self-stretch justify-between items-center gap-5 px-[50px] py-[18px] md:px-5 sm:px-4 bg-white-a700`}
        >
            {/* Logo Section */}
            <div className="mt-3 flex items-start self-end">
                <a href="#">
                    <Img src="images/img-leaf.svg" alt="Leaf Image" className="h-[44px]" />
                </a>
                <Heading
                    size="textxl"
                    as="p"
                    className="self-center font-newsreader text-[40px] font-medium tracking-[8.40px] text-light-green-900 lg:text-[34px] md:text-[34px] sm:text-[32px]"
                >
                    Mazraعty
                </Heading>
            </div>

            {/* Navigation and Buttons */}
            <div className="mr-[26px] flex w-[48%] items-start justify-between gap-5 md:mr-0 md:w-full md:flex-col">
                <ul className="flex items-center gap-[34px] sm:flex-col">
                    {/* About Section */}
                    <li>
                        <a href="#" className="cursor-pointer lg:text-[13px]">
                            <Heading
                                as="h6"
                                className="text-[16px] font-semibold text-light-green-900 hover:font-normal hover:text-black-900"
                            >
                                About
                            </Heading>
                        </a>
                    </li>

                    {/* Contact Us Section */}
                    <li>
                        <a href="#" className="cursor-pointer lg:text-[13px]">
                            <Heading
                                as="h6"
                                className="text-[16px] font-semibold text-light-green-900 hover:font-normal hover:text-black-900"
                            >
                                Contact Us
                            </Heading>
                        </a>
                    </li>

                    {/* Profile Section */}
                    <li>
                        <a href="#">
                            <div className="flex items-center py-1.5">
                                <Img
                                    src="images/img_image_4.png"
                                    alt="Profile Image"
                                    className="h-[24px] w-[26px] object-cover"
                                />
                                <Text
                                    size="texts"
                                    as="p"
                                    className="text-[16px] font-normal text-black-900 lg:text-[13px]"
                                >
                                    <span className="font-semibold text-light-green-900">My</span>
                                    <span className="text-black-900">&nbsp;</span>
                                    <span className="font-semibold text-light-green-900">Profile</span>
                                </Text>
                            </div>
                        </a>
                    </li>
                </ul>

                {/* Login/Sign Up Button */}
                <Button
                    size="xs"
                    shape="round"
                    className="min-w-[144px] self-center rounded-lg px-3.5 font-semibold"
                >
                    Login / Sign up
                </Button>
            </div>
        </header>
    );
}
