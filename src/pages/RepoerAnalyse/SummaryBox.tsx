/* eslint-disable @typescript-eslint/no-explicit-any */
interface SummaryBoxProps {
    data:any
}
const SummaryBox:React.FC<SummaryBoxProps> = ({
    data
}) => {
    return (
        <>
            <div className="w-full flex justify-start items-center h-[64px] p-4 rounded-[6px] bg-[#1E1E1E]">
                <div className="w-10 h-10 border-2 border-[#06C78D] rounded-full"></div>
                <div className="ml-2">
                    <div className="text-[#FFFFFFDE] text-[14px]">{data.name}</div>
                    <div className="flex justify-start items-center">
                        <div className="text-[#FFFFFF99] text-[10px]">{data.exam} Exam</div>
                        <div className="text-[#FFFFFF99] ml-2 text-[10px]">{data.refrence} Out of reference </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default SummaryBox