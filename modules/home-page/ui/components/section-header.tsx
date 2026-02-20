
interface Props {
    children: React.ReactNode;
}

export const SectionHeader = ({ children }: Props) => {
    return (
        <div className="w-full flex items-center gap-x-3">
            <h2 className="font-extrabold text-3xl text-[#A8A8A8]"> { children } </h2>
            <div className="w-75 h-px bg-[#9D00FF]"></div>
        </div>
    )
}