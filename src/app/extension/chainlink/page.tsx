"use client";
import Popup from "@/components/extensionChainLink/Popup";
import React from "react";

type Props = {};

export default function ExtensionChainLink({}: Props) {
    return (
        <div
            style={{ background: "linear-gradient(180deg, #DCE5F8 0%, #FFF 100%)" }}
            className="flex items-start justify-center  h-full  pt-4 pr-3 "
        >
            <div className="w-[320px]">
                <Popup />
            </div>
        </div>
    );
}
