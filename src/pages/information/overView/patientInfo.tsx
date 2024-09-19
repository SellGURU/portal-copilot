import React from "react";
// import { useSelector } from "react-redux";
interface patientInfoProps {
  name: string;
  value: number;
  border:string,
}
export const PatientInfo: React.FC<patientInfoProps> = ({ name, value ,  border }) => {
  // const theme = useSelector((state: any) => state.theme.value.name);
  return (
    <div className=" relative flex flex-col  items-center justify-center w-[58px] h-[58px] lg:w-20 lg:h-20  xl:w-24 xl:h-24 2xl:w-28 2xl:h-28">
      <img className="absolute w-full h-full object-cover" src={border} alt="" />
      <div className="flex flex-col  items-center justify-center gap-1">
        <h2 className={`${name === "Physiological" ? 'text-primary-color' : 'text-brand-secondary-color'}  font-bold text-[8px] lg:text-xs xl:text-lg 2xl:text-[20px]`}>
          {value}%
        </h2>
        <p className="mb-2  text-third-text text-[8px] lg:text-[10px] xl:text-xs  font-normal">{name}</p>
      </div>
    </div>
  );
};
