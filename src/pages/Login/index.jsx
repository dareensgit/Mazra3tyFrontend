import { Helmet } from "react-helmet";
import { Button, Img, Text, Input, Heading } from "../../component";
import React from "react";

export default function LoginPage() {
    return (
        <>
            <Helmet>
                <title>
                    Login to Mazraعty - Access Fresh Organic Produce
                </title>
                <meta
                    name="description"
                    content="Log in to your Mazraعty account to browse and purchase the freshest vegetables, dairy, and meats directly from local farmers. Sign up today for a healthier lifestyle."
                />
            </Helmet>
            <div
                className="flex h-[928px] w-full flex-col items-start justify-center gap-[68px] bg-[url('/public/images/Border of green vegetables and fruit.jpg')] bg-cover bg-no-repeat py-[134px] pl-[596px] pr-14 lg:h-auto lg:py-8 lg:pl-8 md:h-auto md:p-5 sm:gap-[34px] sm:px-5"
            >
                <a href="#" className="ml-[98px] lg:text-[30px] md:ml-0 md:text-[30px] sm:text-[28px]">
                    <Heading
                        size="headinglg"
                        as="h1"
                        className="font-manrope text-[36px] font-bold text-light_green-900"
                    >
                        Log in
                    </Heading>
                </a>
                <div className="w-[38%] lg:w-full md:w-full">
                    <div className="mb-12 mt-[68px]">
                        <div className="mx-4 flex flex-col gap-4 md:mx-0">
                            {/* User Type */}
                            <div className="flex flex-col items-start">
                                <Text as="p" className="font-poppins text-[14px] font-normal text-gray-700">
                                    User
                                </Text>
                                <Input
                                    color="black_900_66"
                                    name="User Type Selector"
                                    placeholder="Pick user type"
                                    suffix={
                                        <div className="flex h-[10px] w-[10px] items-center justify-center">
                                            <Img
                                                src="images/img_polygon_1_blue_gray_100.svg"
                                                alt="Polygon 1"
                                                className="my-1 h-[10px] w-[10px] object-contain"
                                            />
                                        </div>
                                    }
                                    className="w-[64%] gap-2 rounded border font-poppins"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col items-start gap-1.5">
                                <Text as="p" className="ml-2.5 font-poppins text-[14px] font-normal text-gray-700 md:ml-0">
                                    Email
                                </Text>
                                <Input
                                    size="sm"
                                    variant="fill"
                                    shape="round"
                                    type="email"
                                    name="Email Input"
                                    placeholder="example@gmail.com"
                                    className="self-stretch rounded-[10px] border-[0.5px] px-2.5 font-poppins"
                                />
                            </div>

                            {/* Password */}
                            <div className="flex flex-col items-start">
                                <Text as="p" className="font-poppins text-[14px] font-normal text-gray-700">
                                    Password
                                </Text>
                                <Input
                                    size="md"
                                    variant="fill"
                                    shape="round"
                                    type="password"
                                    name="Password Input"
                                    suffix={
                                        <Img
                                            src="images/img_eye_icon.png"
                                            alt="Eye Icon"
                                            className="h-[16px] w-[16px] object-contain"
                                        />
                                    }
                                    className="gap-4 self-stretch rounded-[10px] border px-3.5"
                                />
                            </div>
                        </div>

                        {/* Divider */}
                        <div className="ml-3 mr-5 mt-10 flex items-center gap-2.5 md:mx-0">
                            <div className="flex-1 h-px bg-black-900_7f" />
                            <Text
                                size="textmd"
                                as="p"
                                className="self-center font-poppins text-[18px] font-normal text-black-900_cc lg:text-[15px]"
                            >
                                OR
                            </Text>
                            <div className="flex-1 h-px bg-black-900_7f" />
                        </div>

                        {/* Buttons */}
                        <Button
                            color="white_A700"
                            shape="round"
                            leftIcon={
                                <div className="flex h-[24px] w-[24px] items-center justify-center bg-white-a700">
                                    <Img
                                        src="images/img_google_red_500.svg"
                                        alt="Google"
                                        className="h-[22px] w-[22px] object-contain"
                                    />
                                </div>
                            }
                            className="mt-4 gap-3.5 self-stretch rounded-[10px] font-roboto font-medium"
                        >
                            Sign In with Google
                        </Button>
                        <Button
                            color="blue_A400"
                            shape="round"
                            leftIcon={
                                <div className="flex h-[24px] w-[24px] items-center justify-center bg-blue-a400">
                                    <Img
                                        src="images/img_facebook_white_a700.svg"
                                        alt="Facebook"
                                        className="h-[22px] w-[22px] object-contain"
                                    />
                                </div>
                            }
                            className="mt-4 gap-3.5 self-stretch rounded-[10px] font-helvetica font-bold"
                        >
                            Sign In with Facebook
                        </Button>
                        <Button
                            color="white_A700"
                            shape="round"
                            className="mt-4 self-stretch rounded-[10px] border border-solid border-light_green-100 font-roboto font-medium text-light_green-900"
                        >
                            Create an Account
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
