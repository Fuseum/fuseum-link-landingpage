import ConnectWallet from "./ConnectWallet";
import SendLink from "./SendLink";

export default function QR() {
    return (
        <div className="flex w-full flex-col items-start gap-3">
            <ConnectWallet />
            <SendLink />
        </div>
    );
}
