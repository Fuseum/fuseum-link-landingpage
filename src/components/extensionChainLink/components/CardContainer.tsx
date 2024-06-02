import { useEffect, useState } from "react";
import { useStep } from "@/hooks/useStep";
import ApplyCoupon from "./ApplyCoupon";
import Coupon from "./Coupon";
import PlaceOrder from "./PlaceOrder";
import QR from "./QR";
import Sidebar from "./Sidebar";

type Props = {
    step: number;
};
const ICDrop = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M12 10L8 6L4 10" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};
const StepInformation = [
    {
        title: "Deposit Required LINK",
        stepNumber: 1,
        child: <QR />,
    },
    {
        title: "Convert to Amazon Balance",
        stepNumber: 2,
        child: <Coupon />,
    },
    {
        title: "Apply Voucher for Payment",
        stepNumber: 3,
        child: <ApplyCoupon />,
    },
    {
        title: "Place Order",
        stepNumber: 4,
        child: <PlaceOrder />,
    },
];
export default function CardContainer({ step }: Props) {
    const [currentStepIndex, setStepIndex] = useState<number>(0);
    const { currentStep, setStep } = useStep();
    useEffect(() => {
        setStepIndex(step - 1);
        return () => {};
    }, [step]);

    return (
        <div className="flex w-full items-start">
            <Sidebar stepNumber={StepInformation[currentStepIndex].stepNumber} />
            <section className="flex items-center justify-between pb-4 font-HelveticaNeue w-full">
                <div
                    style={{ background: "linear-gradient(180deg, #FFF 0%, #EFF2F6 100%)" }}
                    className={`flex w-full flex-col items-start gap-4 self-stretch rounded-[8px] border-[0.5px] border-solid border-[rgba(147,147,147,0.25)] p-1 backdrop-blur-md`}
                >
                    <div
                        className={
                            `flex w-full items-center justify-between text-[#140E24] rounded px-3 py-2 ` +
                            `${currentStep != step ? "bg-[rgba(208,222,244,0.25)]" : " bg-[#D0DEF4]"}`
                        }
                    >
                        <p className=" text-[13px] font-[500] not-italic leading-[100%] tracking-[-0.25px] self-stretch">
                            {StepInformation[currentStepIndex].title}
                        </p>
                        <ICDrop />
                    </div>
                    {currentStep == step && (
                        <div className="flex w-full items-center justify-center">
                            {StepInformation[currentStepIndex].child}
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
