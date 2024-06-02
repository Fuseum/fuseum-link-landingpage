import { useCallback } from "react";
import { useAccount, useBalance, useReadContract, useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import sender_abi from "../contract/sender.json";
const FuJi_contract = "0x5a097EEd24809aD2175054505f3d3Ae7AD73df72";
const CCIP_BnM = "0xD21341536c5cF5EB1bcb58f6723cE26e8D8E90e4";
export default function useLinkProtocol() {
    const { data: hash, error, isPending, isSuccess, writeContract } = useWriteContract();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });
    const { address } = useAccount();

    const resultLinkBalance = useBalance({
        address: address,
        token: CCIP_BnM,
    });
    const resultLinkPrice = useReadContract({
        abi: sender_abi,
        address: FuJi_contract,
        functionName: "getLINKUSDPrice",
    });
    const GetLinkAmount = useCallback(() => {
        return resultLinkBalance.data?.value;
    }, [resultLinkBalance.data?.value]);

    const GetLinkUSDPrice = useCallback(() => {
        return resultLinkPrice.data;
    }, [resultLinkPrice.data]);

    async function TransferTokensPayLINK(tokenAmount: any) {
        writeContract({
            address: FuJi_contract,
            abi: sender_abi,
            functionName: "transferTokensPayLINK",
            args: ["16015286601757825753", "0xFb6974c03394bEeAF3C8648b60983E0f228daA7E", CCIP_BnM, tokenAmount],
        });
        console.log();
        return { hash, isConfirmed, isPending };
    }

    const TransferTokensPayLINKVer2 = useCallback(
        async (tokenAmount: any) => {
            try {
                writeContract({
                    address: FuJi_contract,
                    abi: sender_abi,
                    functionName: "transferTokensPayLINK",
                    args: ["16015286601757825753", "0xFb6974c03394bEeAF3C8648b60983E0f228daA7E", CCIP_BnM, tokenAmount],
                });
                return { hash, isSuccess };
            } catch (error) {}

            return { error };
        },
        [error, hash, isSuccess, writeContract]
    );

    return { TransferTokensPayLINK, TransferTokensPayLINKVer2, GetLinkUSDPrice, GetLinkAmount };
}
