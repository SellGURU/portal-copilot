import Toggle from "./Toggle"

const RefrenceBox = () => {
    return (
        <>
            <div className="w-full h-[188px] pt-3 px-4 bg-[#1E1E1E] border border-[#383838] rounded-[6px]">
                <div className="flex justify-between items-center">
                    <div className="text-[14px] text-[#FFFFFFDE] font-medium">NoN-HDL Cholesterol </div>
                    <div className="flex gap-2 justify-end items-center">
                        <div className="text-[#FFFFFFDE] text-[12px] font-medium">
                            Historical Chart

                        </div>
                        <Toggle></Toggle>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <div className="text-[#FFFFFFDE] text-[12px] font-medium">Current Value</div>
                </div>

                <div className="mt-16">
                    <div className="w-full relative flex">
                        <div className="absolute top-[-26px] left-[40%] z-10">
                            <div className="text-[10px] text-[#FFFFFFDE]">200</div>
                            <div className="w-[3px] h-[8px] ml-[2.5px] bg-white"></div>
                            <div className="w-2 h-2  rotate-45 bg-white"></div>
                        </div>
                        <div className="w-[33.3%] relative bg-[#06C78D] h-[8px] rounded-l-[8px]">
                            <div className="absolute left-0 top-3 text-[#FFFFFF61] text-[10px]">0</div>
                            <div className="absolute right-0 top-3 text-[#FFFFFF61] text-[10px]">190</div>
                        </div>
                        <div className="w-[33.3%] relative bg-[#FBAD37] h-[8px] ">
                             <div className="absolute left-[50%] top-3 text-[#FFFFFF61] text-[10px]">250</div>
                        </div>
                        <div className="w-[33.3%] relative bg-[#FC5474] h-[8px] rounded-r-[8px]">
                            <div className="absolute right-0 top-3 text-[#FFFFFF61] text-[10px]">400</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RefrenceBox