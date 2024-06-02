import Image from "next/image";
import Link from "next/link";
import React from "react";
import X from "@assets/X.png";
import Telegram from "@assets/Telegram.png";
import Cap from "@assets/Capa_1.png";
type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="flex gap-4 justify-between px-[40px] h-[69px]  max-sm:p-4 max-sm:justify-center max-sm:items-center max-sm:flex-col max-sm:h-fit absolute bottom-0 w-full bg-[#140E24]">
            <div className="flex flex-row gap-2 items-center">
                <div className="solana py-[6px] px-2 rounded-[99px]">
                    <h3 className="text-[12px] text-[#140E24] leading-[12px]">TECH</h3>
                </div>
                <h3 className="text-[#F4F4F4] text-[16px] font-medium leading-[16px] max-w-[426px]">
                    Fuseum - an innovative open-source browser extension developed by{" "}
                    <span className="text-[16px] font-medium leading-[16px] text-[#9D3BFF]">Esol Labs</span> powered by{" "}
                    <span className="text-[#67B6FF] text-[16px] font-medium leading-[16px]">SUI</span>
                </h3>
                <div className="text-[#67B6FF] text-[16px] font-medium leading-[16px]]">Guideline</div>
                <div className=" mx-[24px] text-[#5A5659] max-sm:hidden">|</div>
                <div className="text-[#67B6FF] text-[16px] font-medium leading-[16px]]">
                    {" "}
                    <a href="/fuseum.zip" download>
                        <button className="text-[#67B6FF]">Download</button>
                    </a>
                </div>
            </div>
            <div className="flex flex-row gap-4 md:gap-8 items-center">
                <div className="flex flex-row gap-3 relative">
                    <button>
                        <Image src={X} width={16} height={16} objectFit="cover" alt="X" />
                    </button>
                    <button>
                        <Image src={Telegram} width={16} height={16} objectFit="cover" alt="Telegram" />
                    </button>
                    <button>
                        <Image src={Cap} width={16} height={16} objectFit="cover" alt="Cap" />
                    </button>
                </div>
                <Link href="" className="text-[#67B6FF] font-medium leading-[16px] text-[16px]">
                    Term
                </Link>
                <Link href="" className="text-[#67B6FF] font-medium leading-[16px] text-[16px]">
                    Privacy
                </Link>
            </div>
        </div>
    );
}
