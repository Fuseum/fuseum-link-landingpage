type Props = {};

export default function Footer({}: Props) {
    return (
        <div className="flex w-full flex-col items-center justify-center gap-3 absolute bottom-0 right-0 left-0 py-4">
            <p className=" font-IBMPlexMono text-[11px] font-normal not-italic leading-[100%] text-[#82959B]">
                Powered by LINK
            </p>
            <p className="text-[11px] font-normal not-italic leading-[100%] text-[#375BD2]">Term Privacy</p>
        </div>
    );
}
