import React from "react";
import fuseum from "@assets/fuseum_icon.svg";
import Image from "next/image";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
type Props = {};

export default function Header({}: Props) {
    return (
        <div className=" py-[24px] text-white  px-[200px]  max-sm:px-4 absolute top-0 bg-[#030F1C] flex w-full justify-between items-center">
            <Link href={"/"} className="flex items-center gap-3">
                <Image src={fuseum} alt="logo" width={48} height={48} />
                <div className="text-[40px] font-[700] italic font-BrunoAceSC">Fuseum</div>
            </Link>
            <div className="flex bg-[#67B6FF] max-sm:hidden font-DMMono rounded-full justify-center items-center gap-2 px-6 py-3 text-base font-[500] cursor-pointer">
                <a href="/amazonExtension.zip" download>
                    <button className="text-[#140E24] font-DMMono font-[600]">Download Fuseum</button>
                </a>
            </div>
            <button className="hidden max-sm:flex bg-[#67B6FF] font-DMMono rounded-full justify-center items-center gap-2 px-6 py-3 text-base font-[500] cursor-pointer">
                <FaDownload />
            </button>
        </div>
    );
}
