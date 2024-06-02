import { useStep } from "@/hooks/useStep";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useMemo } from "react";
import ConnectWallet from "./ConnectWallet";
import SendLink from "./SendLink";

function generateUUID(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
        const r = (crypto.getRandomValues(new Uint8Array(1))[0] & 0x0f) >> 0;
        const v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

export default function QR() {
    const { setStep } = useStep();
    const uuid = useMemo(generateUUID, []);
    const { data: SuiPrice } = useQuery({
        queryKey: ["getSuiPrice"],
        queryFn: async () => {
            const response = await axios.get(
                "https://hermes.pyth.network/v2/updates/price/latest?ids[]=0x23d7315113f5b1d3ba7a83604c44b94d79f4fd69af77f804fc7f920a6dc65744"
            );
            return response.data?.parsed[0]?.price?.price;
        },
        refetchInterval: 5000,
    });

    return (
        <div className="flex w-full flex-col items-start gap-3">
            <div>
                <ConnectWallet />
            </div>
            <div>
                <SendLink />
            </div>
            <div className="flex w-full items-center gap-1 whitespace-nowrap">
                <p className="font-MonaSans text-xs font-normal not-italic leading-4 text-[#537390]">Exchange rate:</p>
                <p className="text-right text-xs font-bold not-italic leading-4 text-[#67B6FF]">
                    1 LINK ~ {Number(SuiPrice / 100000000).toFixed(3)} USD
                </p>
            </div>
        </div>
    );
}
