import { Dispatch, SetStateAction } from "react";
import { LineChart, MixedLinesChart } from "@/components/charts/index";
import { useSelector } from "react-redux";
import { useMemo } from "react";
interface ChartData {
  dates: string[];
  values: number[] | { Low: number[]; High: number[] };
}
interface ChartCardProps {
  type: string | null;
  isMeasured?: boolean;
  status?: string;
  othersTypes?: string[];
  chartData: ChartData;
  active: string | null;
  setActive: Dispatch<SetStateAction<any>>;
}
// const otherTypes = ['Hb' , 'HCT' , 'WBC' ,'MCHC' , 'MCH' , 'RBC', 'PLT' ]
export const SmallChartCard: React.FC<ChartCardProps> = ({

  type ,
  active,
  setActive,
  chartData
  
}) => {
  console.log(type);

  
  const theme = useSelector((state: any) => state.theme.value.name);
  const isBloodPressureValues = (
    values: any
  ): values is { Low: number[]; High: number[] } => {
    return (
      values &&
      typeof values === "object" &&
      'Low' in values &&
      'High' in values &&
      Array.isArray(values.Low) &&
      Array.isArray(values.High)
    );
  };
  const flattenArray = (arr: any[]) => arr.reduce((acc, val) => acc.concat(val), []);

  const averageValue = useMemo(() => {
    const { values } = chartData;
    if (type === "Blood Pressure" && isBloodPressureValues(values)) {
      const { Low, High } = values;
      const flattenedLow = flattenArray(Low);
      const flattenedHigh = flattenArray(High);
      const sumLow = flattenedLow.reduce((acc: number, val: number) => acc + val, 0);
      const sumHigh = flattenedHigh.reduce((acc: number, val: number) => acc + val, 0);
      const avgLow = sumLow / flattenedLow.length;
      const avgHigh = sumHigh / flattenedHigh.length;
      return (avgLow + avgHigh) / 2;
    } else if (Array.isArray(values)) {
      const flattenedValues = flattenArray(values);
      if (flattenedValues.length === 0) return 0;
      const sum = flattenedValues.reduce((acc: number, val: number) => acc + val, 0);
      return sum / flattenedValues.length;
    }
    return 0;
  }, [chartData, type]);

  const lastValue = useMemo(() => {
    const { values } = chartData;
    if (type === "Blood Pressure" && isBloodPressureValues(values)) {
      const flattenedLow = flattenArray(values.Low);
      const flattenedHigh = flattenArray(values.High);
      const lastLow = flattenedLow[flattenedLow.length - 1];
      const lastHigh = flattenedHigh[flattenedHigh.length - 1];
      return (lastLow + lastHigh) / 2;
    } else if (Array.isArray(values)) {
      const flattenedValues = flattenArray(values);
      return flattenedValues[flattenedValues.length - 1];
    }
    return 0;
  }, [chartData, type]);

  const lowHighValues = useMemo(() => {
    const { values, dates } = chartData;
    if (type === "Blood Pressure" && isBloodPressureValues(values)) {
      return {
        lowValues: values.Low,
        highValues: values.High,
        dates: dates,
      };
    }
    return { lowValues: [], highValues: [], dates };
  }, [chartData, type]);

  const lineChartData = useMemo(() => {
    const { values, dates } = chartData;
    if (!isBloodPressureValues(values)) {
      return { dates, values };
    }
    return { dates: [], values: [] };
  }, [chartData, type]);
console.log(lowHighValues);
  return (
    <div
      onClick={() => setActive(type)}
    data-active ={active===type}
    className={`${theme}-smallChartCard-container cursor-pointer`}
    >
      <div className=" w-full  flex   flex-col gap-3  ">
        <div className="flex gap-2 items-center">
          <div className="bg-black-background flex items-center justify-center rounded-lg p-1">
            <img
              className={`${theme}-icons-${type?.replace(/\s+/g, "")}`}
              alt=""
            />
          </div>

          <h2
          data-active={active===type}
           className={`${theme}-smallChartCard-title`}
          >
            {type}
          </h2>
        </div>
        {/* {
            title === "CBC" &&(
                <div className="flex  my-1 ">
                { otherTypes.map((item , i) => (
                  <span key={i}
                    onClick={() => setActive(item)}
                    className={`${
                      active === item
                        ? "text-brand-primary-color   border-brand-primary-color"
                        : "text-secondary-text border-main-border "
                    } border-b cursor-pointer px-2 text-sm`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            )
        } */}
       
        <div className=" w-[180px] h-[100px]">
          {type === "Blood Pressure" ? (
            <MixedLinesChart  ChartData={lowHighValues}  active={active === type} />
          ) : (
            <LineChart     ChartData={lineChartData} active={active === type} model={"line"} />
          )}
        </div>
      </div>
      <div className="flex flex-col items-end justify-between w-full ">
        <div className="flex flex-col text-center ">
          <h2
             data-active={active===type}
             className={` ml-[2px]  ${
                theme}-smallChartCard-text text-xs`}
          >
            Avg
          </h2>
          <h2
          data-active={active===type}
            className={` ml-[2px]  ${
                theme}-smallChartCard-text text-primary-text text-sm 2xl:text-lg`}
          >
            {Number(averageValue).toFixed()}
            <span
          data-active={active===type}
            className={` ml-[2px]  ${
             theme}-smallChartCard-text text-[10px]`}
          >
            {type === "Temperature"
              ? "oF"
              : type === "Heart Rate"
              ? "bpm"
              : type === "CBC"
              ? "%"
              : "mm/hg"}
          </span>
          </h2>{" "}
          
        </div>
        <div className="flex  text-center  flex-col">
          <h2
           data-active={active===type}
             className={` ml-[2px] ${
                theme}-smallChartCard-text text-xs`}
          >
            Current
          </h2>
          <h2
           data-active={active===type}
            className={` ml-[2px]  ${
                theme}-smallChartCard-text text-primary-text  text-lg`}
          >
            {lastValue}
            <span
           data-active={active===type}
            className={` ml-[2px]   ${
                theme}-smallChartCard-text text-[10px]`}
          >
            {type === "Temperature"
              ? "oF"
              : type === "Heart Rate"
              ? "bpm"
              : type === "CBC"
              ? "%"
              :  "mm/hg"}
          </span>
          </h2>{" "}
        
        </div>
      </div>
    </div>
  );
};
