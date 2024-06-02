"use client";
import ConnectButton from "@/components/ConnectButton";
import X from "@images/X.svg";
import Tele from "@images/tele.svg";
import Mail from "@images/mail.svg";
import chainlink_bg from "@images/Chainlink_bg.png";

import Image from "next/image";
export default function SuiConnectPage() {
    return (
        <div
            style={{ background: `url(${chainlink_bg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
            className="w-screen h-screen flex flex-col items-center justify-center"
        >
            <ConnectButton />
            <div className=" absolute bottom-0 left-0 right-0 flex justify-between items-center py-6 pl-[64px]">
                <div className="flex items-center gap-4 text-base not-italic font-normal leading-[100%] font-HelveticaNeue text-[#140E24]">
                    <p>
                        Extension E-commerce Developed by <span className="text-[#9D3BFF]">Esol Labs</span>, powered by
                        <span className="text-[#375BD2]"> Chainlink.</span>
                    </p>
                    <a className="text-[#375BD2] cursor-pointer" href="/fuseum.zip">
                        Download
                    </a>
                </div>
                <div className="flex items-center px-[32px]">
                    <div className="flex items-center gap-4">
                        <Image src={X} alt="" />
                        <Image src={Tele} alt="" />
                        <Image src={Mail} alt="" />
                    </div>
                    <div className="flex items-center px-[32px]">
                        <div className="flex items-center gap-8 text-[#140E24] text-sm not-italic font-medium leading-[100%]">
                            <p>Term</p>
                            <p>Privacy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
