"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

type Props = {};

export default function ConnectWallet({}: Props) {
    const { open, close } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="w-full flex items-center justify-center pb-4">
            <button
                onClick={() => open()}
                style={{ boxShadow: "0px 12px 32px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-[#375BD2] text-white text-sm not-italic font-medium leading-5 rounded px-10 py-3"
            >
                {mounted && isConnected && address
                    ? `${address.slice(0, 6)}...${address.slice(address.length - 4, address.length)}`
                    : "Connect Wallet"}
            </button>
        </div>
    );
}
