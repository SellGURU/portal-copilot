import {Card} from "@/components";
import React from "react";

interface numberBoxProps {
    theme:string
    title:string
    icon:string
    value:number
    mode:'increase'|'reduction'|'added'
}

const NumberBox:React.FC<numberBoxProps> = ({theme,mode,title,value,icon}) => {
    const resolveModeText = () => {
        if(mode == 'added'){
            return '2 new patient added!'
        }
        if(mode == 'increase'){
            return '10% increase compared to last month'
        }
        return '10% reduction compared to last month'
    }
    const resolveIcon = () => {
        if(mode == 'increase'){
            return 'dicress.svg'
        }
        if(mode =='added'){
            return 'Add.svg'
        }
        return 'incress.svg'
    }
    return (
        <Card theme={theme}>
            <div className={"text-primary-text flex items-start justify-center flex-col  gap-2"}>
                <div className={"flex items-center justify-between w-full"}>
                    <h1 className={"font-medium text-2xl text-primary-text"}>{value} </h1>
                    <div className={"flex justify-center items-center p-[6px] rounded-full bg-[#121212]"}>
                        <img src={icon} alt="icon"  className={"text-brand-primary-color w-5 h-5"}/>
                    </div>
                </div>
                <h1 className={"text-xs font-medium"}>{title} </h1>
                <div className="flex justify-start items-center">
                    <img src={'./Themes/Aurora/icons/'+resolveIcon()} alt="" />
                    <div className={"text-[10px] font-medium ml-1"}>{resolveModeText()}</div>
                </div>
            </div>
        </Card>
    );
};

export default NumberBox