import { Helmet } from "react-helmet";
import { Img, Button, Heading, Text } from "../../components";
import Footer1 from "../../components/Footer1";
import Header from "../../components/Header";
import AboutUsSection from "./AboutUsSection";
import React from "react";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Organic Marketplace Fresh Farm Produce Online | Mazraعty</title>
        <meta
          name="description"
          content="Discover Mazraعty, the online marketplace for fresh, organic farm produce. 
          Connect with local farmers, shop by category, and enjoy healthier options delivered to your door. 
          Support local agriculture and access a variety of fresh vegetables and fruits directly from the farm."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="mt-8 flex flex-col items-center">
          <div className="relative h-[328px] content-center self-stretch lg:h-auto md:h-auto">
            <div className="flex flex-1 flex-col items-center gap-[62px] sm:gap-[31px]">
              <Header />
              <div className="container-xs pl-[100px] pr-14 lg:px-5 md:px-5">
                <Text
                  size="text2x1"
                  as="p"
                  className="text-center font-newsreader text-[64px] font-normal leading-[120%] tracking-[-1.28px] text-light_green-900 lg:text-[48px] md:text-[48px]"
                >
                  <span>We're&nbsp;</span>
                  <span className="italic">farmers</span>
                  <span>,&nbsp;</span>
                  <span className="italic">purveyors</span>
                  <span>, and&nbsp;</span>
                  <span className="italic">eaters</span>
                  <span>&nbsp; of organically grown food.</span>
                </Text>
              </div>
            </div>
            <div className="absolute bottom-[13px] left-0 right-0 mx-auto flex">
              <div className="mb-[230px] flex items-center gap-3 bg-light_green-900">
                <Heading
                  size="headingmd"
                  as="h1"
                  className="mt-1.5 self-end text-[25px] font-bold text-white-a700 lg:text-[21px]"
                >
                  Shop by Categories{" "}
                </Heading>
                <Img
                  src="images/img_jonathan_kemper.png"
                  alt="Farmer Image"
                  className="h-[640px] w-[40%] object-contain md:w-full"
                />
              </div>
            </div>
          </div>
          <div className="container-xs mt-3.5 flex flex-col items-center gap-[58px] lg:px-5 md:px-5 sm:gap-[29px]">
            <Button
              size="md"
              shape="round"
              className="min-w-[272px] rounded-lg px-7 font-semibold sm:px-4"
            >
              Browse Our Farms
            </Button>
            <div className="mr-[34px] flex items-center gap-6 self-stretch md:mr-0 md:flex-col">
              <Img
                src="images/img_jonathan_kemper.png"
                alt="Farmer Image"
                className="h-[640px] w-[40%] object-contain md:w-full"
              />
              <Img
                src="images/img_stocksy_txp226f.png"
                alt="Produce Image"
                className="h-[504px] w-[58%] object-contain md:w-full"
              />
            </div>
          </div>
          <AboutUsSection />
          <Footer1 />
        </div>
      </div>
    </>
  );
}

            
        
    

















