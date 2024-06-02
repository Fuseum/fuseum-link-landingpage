import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import sender_abi from "../../../contract/sender.json";
type Props = {};
export default function SendLink({}: Props) {
    const { data: hash, error, isPending, writeContract } = useWriteContract();
    const handleSendLink = async () => {
        writeContract({
            address: "0x5CBf8bA8eB6c7567a45dfFDf8d980B84D2A5fc56",
            abi: sender_abi,
            functionName: "sendMessage",
            args: ["16015286601757825753", "0xFb6974c03394bEeAF3C8648b60983E0f228daA7E", "Hello World"],
        });
    };
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
        hash,
    });
    return (
        <div className="flex flex-col items-center justify-start">
            <button onClick={() => handleSendLink()}>Send Link Token</button>
            {hash && <div>Hash: {hash}</div>}
        </div>
    );
}
