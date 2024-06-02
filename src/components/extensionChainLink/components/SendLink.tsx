"use client";
import useLinkProtocol from "@/hooks/useLinkProtocol";
import icon_link from "@images/Amazon/Chainlink.svg";
import { ethers } from "ethers";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useAccount, useSwitchChain, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import sender_abi from "../../../contract/sender.json";
import { useStep } from "@/hooks/useStep";
import { ICLoading } from "./PlaceOrder";
import { motion } from "framer-motion";
const FuJi_contract = "0x5a097EEd24809aD2175054505f3d3Ae7AD73df72";
const CCIP_BnM = "0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4";

export default function SendLink() {
    const { isConnected, chainId } = useAccount();
    const { GetLinkUSDPrice, GetLinkAmount, TransferTokensPayLINK, TransferTokensPayLINKVer2 } = useLinkProtocol();
    const [linkPrice, setLinkPrice] = useState<any>(0);
    const [linkAmount, setLinkAmount] = useState<number>(0);
    const [formData, setFormData] = useState({
        tokenAmount: 0,
    });
    const [mounted, setMounted] = useState(false);
    const { chains, switchChain } = useSwitchChain();

    useEffect(() => {
        setMounted(true);
        const resultAmount = GetLinkAmount();
        const resultPrice = GetLinkUSDPrice();
        if (resultAmount && resultPrice) {
            setLinkAmount(Number(ethers.formatEther(resultAmount)));
            setLinkPrice(Number(resultPrice) / 100000000);
        }
        if (chainId != 43113) {
            console.log(chainId);
            switchChain({ chainId: 43113 });
        }
    }, [GetLinkAmount, GetLinkUSDPrice, chainId, switchChain]);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const { currentStep, setStep } = useStep();
    const { data: hash, error, isPending, isSuccess, writeContract } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });
    async function SubmitTransferTokensPayLINK(tokenAmount: number) {
        writeContract({
            address: FuJi_contract,
            abi: sender_abi,
            functionName: "transferTokensPayLINK",
            args: [
                "16015286601757825753",
                "0xFb6974c03394bEeAF3C8648b60983E0f228daA7E",
                CCIP_BnM,
                ethers.parseUnits(String(tokenAmount)),
            ],
        });
    }
    useEffect(() => {
        if (isConfirmed) {
            setStep(2);
            console.log("🚀 ~ SendLink ~ hash:", hash);
        }
        return () => {};
    }, [isConfirmed, hash, setStep]);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        SubmitTransferTokensPayLINK(formData.tokenAmount);
    };

    return (
        <>
            {isConnected && mounted && (
                <div className="flex flex-col items-end gap-2 self-stretch pt-2 pb-3 px-3">
                    <div className="flex flex-col w-full items-center justify-end font-HelveticaNeue text-[#262626]">
                        <div className="flex items-center justify-between w-full">
                            <p className="text-xs not-italic font-[400] leading-4">Your balance</p>
                            <div className="flex items-center justify-center gap-[6px] text-xs not-italic font-medium leading-4">
                                <Image src={icon_link} alt="Chainlink Icon" width={16} height={16} />
                                <div className="flex items-center gap-[2px]">
                                    <p>{linkAmount.toFixed(3)}</p>
                                    <p>LINK</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-[#A1A1A1] text-[10px] not-italic font-normal leading-[14px] self-stretch text-end">
                            ${(linkAmount * linkPrice).toFixed(3)}
                        </p>
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className="flex items-center gap-2.5 self-stretch pl-2 pr-1 py-1 rounded border border-[#D0DEF4]"
                    >
                        <input
                            type="number"
                            id="tokenAmount"
                            name="tokenAmount"
                            value={formData.tokenAmount}
                            onChange={handleChange}
                            placeholder="Enter Link Amount"
                            className="outline-none placeholder:text-[#8A939B] text-[12px] font-[400] leading-4 text-[#8A939B] bg-transparent w-full"
                        />
                        <button
                            disabled={isPending ? true : false}
                            type="submit"
                            className={
                                `p-[6px] flex items-center justify-center rounded bg-[#375BD2] text-white text-[12px] font-[500] leading-4 active:scale-95` +
                                ` ${isPending ? " cursor-not-allowed" : " cursor-default"}`
                            }
                        >
                            {isPending || isConfirming ? (
                                <div className="flex items-center gap-1">
                                    <motion.div
                                        initial={{ rotate: 0 }}
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                    >
                                        <ICLoading />
                                    </motion.div>
                                    <span>Paying</span>
                                </div>
                            ) : (
                                "Pay"
                            )}
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
