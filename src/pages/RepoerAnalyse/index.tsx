import { useState } from "react"
import SummaryBox from "./SummaryBox"
// import MyChartComponent from "./StatusChart"
import RefrenceBox from "./Boxs/RefrenceBox"

const ReportAnalyse = () => {
    const [generateStep,setGeneralStep] = useState("Client Summary")
    const ClientSummaryBoxs = [
        {
            name:'Thyroid Health',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Vitamins & Minerals',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Bone Health',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Metabolism & Proteins',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Cardiac & Vascular system',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Kidney & Electrolytes',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Red blood cells & Iron',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Abdominal Organs',
            exam:1,
            refrence:0,
            icon:''
        },
        {
            name:'Cells & Infection',
            exam:1,
            refrence:0,
            icon:''
        }                                                                        
    ]
    const refrences = [
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        },
        {
            name:''
        }                                        
    ]
    const changeStep = (step:string) => {
        setGeneralStep(step)
        document.getElementById(step)?.scrollIntoView({
            behavior:'smooth'
        })
    }
    return (
        <>
            <div className="w-full bg-[#121212]  " style={{height:window.innerHeight}}>
                <div className="w-full flex justify-between items-start h-full p-6 pr-0 fixed">
                    <div className="bg-[#1E1E1E]  w-[240px] h-[600px] rounded-[6px]"></div>
                    <div className="flex-grow w-full  ">
                        <div className=" relative z-50 mx-6 h-[56px] flex justify-evenly border-light-border-color bg-white border dark:border-[#383838]  dark:bg-[#272727] rounded-[6px] ">
                            <div onClick={() =>  changeStep("Client Summary")} className="flex  cursor-pointer justify-center items-center gap-2">
                                <div className={`w-5 h-5 rounded-full ${generateStep=='Client Summary'?'dark:border-primary-color dark:text-primary-color text-light-blue-active border-light-blue-active':'text-light-primary-text border-light-primary-text dark:text-[#FFFFFF99]'} border flex justify-center items-center text-[12px] font-medium `}>1</div>
                                <div className={`text-[12px] ${generateStep=='Client Summary'?'dark:text-primary-color text-light-blue-active':' text-light-primary-text dark:text-[#FFFFFF99]'} font-medium `}>Client Summary</div>
                            </div>

                            <img className="w-[16px] invert dark:invert-0" src="./Themes/Aurora/icons/nextStep.svg" alt="" />

                            
                            <div onClick={() => {
                                changeStep("Out of Reference")
                            }} className="flex  cursor-pointer justify-center items-center gap-2">
                                <div className={`w-5 h-5 rounded-full ${generateStep=='Out of Reference'?'dark:border-primary-color dark:text-primary-color text-light-blue-active border-light-blue-active':'text-light-primary-text border-light-primary-text dark:text-[#FFFFFF99]'} border flex justify-center items-center text-[12px] font-medium `}>2</div>
                                <div className={`text-[12px] ${generateStep=='Out of Reference'?'dark:text-primary-color text-light-blue-active':' text-light-primary-text dark:text-[#FFFFFF99]'} font-medium `}>Out of Reference </div>
                            </div>  

                            <img className="w-[16px] invert dark:invert-0" src="./Themes/Aurora/icons/nextStep.svg" alt="" />
                            
                            <div onClick={() =>  changeStep("Groups")} className="flex cursor-pointer justify-center items-center gap-2">
                                <div className={`w-5 h-5 rounded-full ${generateStep=='Groups'?'dark:border-primary-color dark:text-primary-color text-light-blue-active border-light-blue-active':'text-light-primary-text border-light-primary-text dark:text-[#FFFFFF99]'} border flex justify-center items-center text-[12px] font-medium `}>3</div>
                                <div className={`text-[12px] ${generateStep=='Groups'?'dark:text-primary-color text-light-blue-active':' text-light-primary-text dark:text-[#FFFFFF99]'} font-medium `}>Groups</div>
                            </div>    

                            <img className="w-[16px] invert dark:invert-0" src="./Themes/Aurora/icons/nextStep.svg" alt="" />
                            
                            <div onClick={() =>  changeStep("Table Results")} className="flex cursor-pointer justify-center items-center gap-2">
                                <div className={`w-5 h-5 rounded-full ${generateStep=='Table Results'?'dark:border-primary-color dark:text-primary-color text-light-blue-active border-light-blue-active':'text-light-primary-text border-light-primary-text dark:text-[#FFFFFF99]'} border flex justify-center items-center text-[12px] font-medium `}>4</div>
                                <div className={`text-[12px] ${generateStep=='Table Results'?'dark:text-primary-color text-light-blue-active':' text-light-primary-text dark:text-[#FFFFFF99]'} font-medium `}>Table Results</div>
                            </div>   
                        </div>                            
                        <div className="mt-[16px] pr-6 h-[600px] ml-6 overflow-y-scroll  ">
                           <div className="flex gap-14">
                                <div className="min-w-[330px] w-[330px] relative">
                                    <img className="" src="./human.png" alt="" />
                                    <div>
                                        <div className="absolute cursor-pointer top-[120px] left-[160px] bg-[#FF3E5D] w-[12px] h-[12px] rounded-full"></div>
                                        <div className="absolute cursor-pointer animate-ping top-[115px] left-[156px] bg-[#FF3E5D] w-[20px] h-[20px] rounded-full"></div>
                                    </div>
                                </div>

                                <div className="flex-grow w-full">
                                    <div className="w-full flex justify-between">
                                        <div>
                                            <div id="Client Summary" className="text-[#FFFFFFDE] text-[24px] font-medium">Client Summary</div>
                                            <div className="text-[#FFFFFF99] text-[12px]">Total of 65 exams in 11 groups</div>
                                        </div>
                                        <div className=" flex items-center gap-5 justify-end">
                                            <div className="flex justify-end items-center">
                                                <div className="bg-[#06C78D] w-4 h-4 rounded-full"></div>
                                                <div className="text-[#FFFFFFDE] text-[12px] ml-1">Normal</div>
                                            </div>

                                            <div className="flex justify-end items-center">
                                                <div className="bg-[#FBAD37] w-4 h-4 rounded-full"></div>
                                                <div className="text-[#FFFFFFDE] text-[12px] ml-1">At risk</div>
                                            </div>

                                            <div className="flex justify-end items-center">
                                                <div className="bg-[#FC5474] w-4 h-4 rounded-full"></div>
                                                <div className="text-[#FFFFFFDE] text-[12px] ml-1">Need action</div>
                                            </div>                                        
                                        </div>
                                    </div>
                                    <div className="text-[#FFFFFF99] text-justify text-[12px] mt-4" style={{lineHeight:'24px'}}>This document provides a general overview of your test results, but the official laboratory report contains the complete results. It does not offer a diagnosis, which should be made by your doctor based on the tests and clinical context. If you have questions or concerns, consult your doctor. More information is available here.</div>
                                    <div className="w-full mt-4 grid gap-4 grid-cols-2">
                                        {ClientSummaryBoxs.map((el) => {
                                            return (
                                                <SummaryBox data={el}></SummaryBox>
                                            )
                                        })}
                                    </div>



                                </div>

                           </div>
                            <div className="my-10 ">
                                <div>
                                    <div id="Out of Reference" className="text-[#FFFFFFDE] text-[24px] font-medium">Out of Reference </div>
                                    <div className="text-[#FFFFFF99] text-[12px]">Total of 8 exams altered from a list of 65 exams</div>
                                </div>   
                                <div className="w-full mt-4 grid gap-4 grid-cols-2">
                                    {refrences.map(() => {
                                        return (
                                            <RefrenceBox></RefrenceBox>
                                        )
                                    })}
                                
                                </div>                             
                                        {/* <CustomCanvasChart></CustomCanvasChart> */}
                            </div>       
                        </div>   
         
                    </div>
               
                </div>
            </div>
        </>
    )
}

export default ReportAnalyse