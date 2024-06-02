import { useStep } from "@/hooks/useStep";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

type Props = {};
const ICCheck = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
                d="M2 6.30555L4.46154 8.75L10 3.25"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
export const ICCheckBlue = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
                d="M2 6.30555L4.46154 8.75L10 3.25"
                stroke="#67B6FF"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
            />
        </svg>
    );
};
export default function ApplyCoupon({}: Props) {
    const { currentStep, setStep } = useStep();

    const searchParams = useSearchParams();
    const extension_id = searchParams.get("extension-id");
    useEffect(() => {
        if (extension_id) {
            chrome.runtime.sendMessage(
                extension_id,
                {
                    action: "sendGiftCodeFromChainLink",
                    giftCode: "G6HA-IJ5K-LYUV-WZ14-DQ0R",
                },
                (response) => {
                    console.log("Response:", response?.status);
                    if (response?.status == "Success apply gift code") {
                        setTimeout(() => {
                            setStep(4);
                        }, 2000);
                    }
                }
            );
        }
        return () => {};
    }, [extension_id, setStep]);

    return (
        <div className="flex flex-col items-start gap-4 font-HelveticaNeue w-full">
            <div
                style={{ border: "0.5px solid var(--Gray, #CECBCF)" }}
                className="flex items-center justify-between gap-[10px] self-stretch rounded pl-3 py-1 pr-1"
            >
                <p className="text-[#8A939B] text-[10px] not-italic font-[400] leading-[100%] uppercase flex-1">
                    G6HA-IJ5K-LYUV-WZ14-DQ0R
                </p>
                <div className="flex items-center justify-center rounded bg-[#375BD2] p-[6px]">
                    <ICCheck />
                </div>
            </div>
            <div className="flex items-center gap-[10px] px-3 pb-3">
                <ICCheckBlue />
                <p className="text-[#8A939B] text-[10px] not-italic font-normal leading-[120%] tracking-[-0.25px] font-Satoshi self-stretch">
                    Gift card balance applied for payment!
                </p>
            </div>
        </div>
    );
}
