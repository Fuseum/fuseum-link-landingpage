"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import banner from "@assets/guideline/banner.png";
import step1 from "@assets/guideline/InstallGuide/step1.jpg";
import step2 from "@assets/guideline/InstallGuide/step2.jpg";
import step3 from "@assets/guideline/InstallGuide/step3.jpg";
import step4 from "@assets/guideline/InstallGuide/step4.jpg";
import step5 from "@assets/guideline/InstallGuide/step5.jpg";
import step6 from "@assets/guideline/InstallGuide/step6.jpg";
import step7 from "@assets/guideline/InstallGuide/step7.jpg";

import use_step1 from "@assets/guideline/UseGuide/step1.jpg";
import use_step2 from "@assets/guideline/UseGuide/step2.jpg";
import use_step3 from "@assets/guideline/UseGuide/step3.jpg";
import use_step4 from "@assets/guideline/UseGuide/step4.jpg";
import use_step5 from "@assets/guideline/UseGuide/step5.jpg";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import icon_line from "@assets/guideline/line.svg";
import bg from "@assets/guideline/bg.jpg";
import { useInView } from "react-intersection-observer";

type Props = {};
const InstallGuide = [
    {
        title: "Visit https://fuseum.app/download and download it on your desktop.",
        image: step1,
    },
    {
        title: "Save to your device",
        image: step2,
    },
    {
        title: "Extract zip",
        image: step3,
    },
    {
        title: `Return to the page and select "Manage extensions"`,
        image: step4,
    },
    {
        title: `Turn on the “Developer mode"`,
        image: step5,
    },
    {
        title: `Choose the “Load unpacked" and select the “dist" folder`,
        image: step6,
    },
    {
        title: "Install extenstion",
        image: step7,
    },
];
const UseageGuide = [
    {
        title: "Search and select product",
        image: use_step1,
    },
    {
        title: "Click the button “Add to cart”",
        image: use_step2,
    },
    {
        title: `Click the button “Proceed to check out”`,
        image: use_step3,
    },
    {
        title: `Click the button “Check out with Sui”`,
        image: use_step4,
    },
    {
        title: `Use a crypto wallet on your phone to scan the QR payment with Sui compatibility`,
        image: use_step5,
    },
];
const ContentDiv = ({ inView }: { inView: boolean }) => {
    const [activeIndex, SetActiveIndex] = useState(0);

    return (
        <div className="flex text-[24px] max-sm:hidden shrink-0 font-[600] w-[280px] h-fit flex-col items-start gap-[16px] p-6 sticky top-[8%] right-0 text-[#CECBCF] font-TWKEverett rounded-[24px] bg-[#211A36]">
            <div className="flex w-full items-start text-[#67B6FF] mb-[8px]">Table content</div>
            <div className="flex items-center gap-3 text-[16px] font-[500]">
                {/* <Image src={icon_line} alt="line" className={`${inView == false ? " opacity-1" : " opacity-0"}`} /> */}
                <div
                    className={`bg-[#67B6FF] size-[6px] rounded-full ${inView == false ? "opacity-1" : "opacity-0"}`}
                ></div>
                <p
                    className={`text-start text-[16px] ${
                        inView == false ? "text-[#FFF]" : "text-[rgba(255,255,255,0.58)]"
                    }`}
                >
                    Install Fuseum for Desktop
                </p>
            </div>
            <div className="flex items-center gap-3 text-[16px] font-[500]">
                {/* <Image src={icon_line} alt="line" className={`${inView == true ? " opacity-1" : " opacity-0"}`} /> */}
                <div
                    className={`bg-[#67B6FF] size-[6px] rounded-full shrink-0 ${
                        inView == true ? "opacity-1" : "opacity-0"
                    }`}
                ></div>
                <p
                    className={`text-start text-[16px] ${
                        inView == true ? "text-[#FFF]" : "text-[rgba(255,255,255,0.58)]"
                    }`}
                >
                    Use Fuseum to buy product on Amazon
                </p>
            </div>
        </div>
    );
};
export default function GuidelinePage({}: Props) {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });
    return (
        <div
            style={{
                background: `url(${bg.src})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
            className="bg-[#140E24]  flex flex-col items-center px-[200px] py-[100px] pb-[100px] max-sm:px-4 max-sm:py-[100px] max-sm:pb-[200px] relative font-MonaSans"
        >
            <Header />

            <Footer />
            <div className="flex flex-col items-start gap-[40px] relative ">
                <div className="flex flex-col items-start gap-3 ">
                    <p className="text-[color:var(--Gray,#CECBCF)] text-xl not-italic font-normal leading-[100%]">
                        Getting started
                    </p>
                    <p className="text-[#67B6FF] text-2xl not-italic font-semibold leading-[100%]">
                        How to install Fuseum and buy product on Amazon
                    </p>
                </div>
                <Image src={banner} alt="banner" />
            </div>
            <div className="flex items-start justify-between w-full relative mt-[40px] font-MonaSans">
                <div className="flex flex-col items-start gap-[40px]">
                    <div className="relative text-[color:var(--Gray,#CECBCF)] w-[637px] max-sm:w-fit  text-xl not-italic font-normal leading-7">
                        Welcome to Fuseum! This guide will help walk you through installing and using Fuseum Extenstion
                        to buy product on Amazon.
                    </div>
                    <div className="flex items-start justify-center gap-[32px] flex-col w-full mt-[40px]">
                        <div className="text-[color:var(--White,#FFF)] mb-2 w-[680px] max-sm:w-fit text-[40px] max-sm:text-[36px] not-italic font-semibold leading-[100%]">
                            Install Fuseum Extenstion for Desktop
                        </div>
                        {InstallGuide.map((item: any, index: number) => {
                            return (
                                <div key={index} className="flex flex-col items-start gap-6 w-[680px] max-sm:w-full">
                                    <p className=" text-white font-[700] text-[18px]">
                                        Step {index + 1}: <span className="font-[500]">{item.title}</span>
                                    </p>
                                    <div
                                        style={{ boxShadow: "0px 4px 200px 0px rgba(190, 200, 218, 0.16) inset" }}
                                        className="flex items-center justify-center p-6 max-sm:p-4 rounded-3xl bg-[rgba(247,247,248,0.05)]"
                                    >
                                        <Image src={item.image} alt="step" className="rounded-2xl" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div ref={ref} className="flex items-start justify-center gap-[32px] flex-col w-full mt-[40px]">
                        <div className="text-[color:var(--White,#FFF)] mb-2 w-[680px] max-sm:w-fit text-[40px] max-sm:text-[36px] not-italic font-semibold leading-[100%]">
                            Use Fuseum to buy product on Amazon
                        </div>
                        {UseageGuide.map((item: any, index: number) => {
                            return (
                                <div key={index} className="flex flex-col items-start gap-6 w-[680px] max-sm:w-full">
                                    <p className=" text-white font-[700] text-[18px]">
                                        Step {index + 1}: <span className="font-[500]">{item.title}</span>
                                    </p>
                                    <div className="flex items-center justify-center p-6 max-sm:p-4 rounded-3xl bg-[rgba(247,247,248,0.05)]">
                                        <Image src={item.image} alt="step" className="rounded-2xl" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    {/* <div ref={ref} className="flex items-start justify-center gap-[32px] flex-col w-full mt-[80px]">
                        <div className="text-[color:var(--White,#FFF)] mb-2 w-[680px] text-[40px] not-italic font-semibold leading-[100%]">
                            Use Fuseum to buy product on Amazon
                        </div>
                        {UseageGuide.map((item: any, index: number) => {
                            return (
                                <div key={index} className="flex flex-col items-start gap-6 w-[680px]">
                                    <p className=" text-white font-[700] text-[18px]">
                                        Step {index + 1}: <span className="font-[500]">{item.title}</span>
                                    </p>
                                    <div className="flex items-center justify-center px-20 py-10 rounded-[20px] bg-[linear-gradient(180deg,#100F11_0%,#17161C_100%)]">
                                        <div
                                            style={{
                                                boxShadow: "0px 0px 0px 8px rgba(255, 255, 255, 0.08)",
                                            }}
                                            className="rounded  flex items-center justify-center "
                                        >
                                            <Image src={item.image} alt="step" className="rounded" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div> */}
                </div>
                <ContentDiv inView={inView} />
            </div>
        </div>
    );
}
