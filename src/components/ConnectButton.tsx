"use client";
import { useWeb3Modal } from "@web3modal/wagmi/react";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import { useSwitchChain } from "wagmi";
export default function ConnectButton() {
    const { open } = useWeb3Modal();
    const { address, isConnected, chainId } = useAccount();

    const [isMounted, setMount] = useState(false);
    useEffect(() => {
        setMount(true);
        return () => {};
    }, []);

    return (
        <>
            {isMounted && (
                <button
                    style={{ boxShadow: "0px 24px 64px -24px rgba(0, 0, 0, 0.25)" }}
                    onClick={() => open()}
                    className="flex flex-col justify-center items-center gap-5 px-20 py-6 bg-[#375BD2] font-HelveticaNeue rounded-lg"
                >
                    <p className=" text-white text-[40px] font-[500]">
                        {isConnected
                            ? `${address?.slice(0, 5)}...${address?.slice(address.length - 4, address.length)}`
                            : "Connect Wallet"}
                    </p>
                </button>
            )}
        </>
    );
}
