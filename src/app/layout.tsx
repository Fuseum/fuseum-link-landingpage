import { Web3ModalProvider } from "@/context/Web3Modal";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
    title: "Fuseum!",
    description: "Empowering Crypto Commerce on LINK",
    abstract: "Fuseum is an innovative open-source browser extension developed by Esol Labs powered by SUI Pay.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Web3ModalProvider>{children}</Web3ModalProvider>
            </body>
        </html>
    );
}
