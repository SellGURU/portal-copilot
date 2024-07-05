/* eslint-disable @typescript-eslint/no-explicit-any */
import { Application } from "@/api";
import { Table , NumberBox } from "@/components";
import { useConstructor } from "@/help";
import { Pationt } from "@/model";
import { useState } from "react";
// import NumberBox from "@/components/numberBox/numberBox";
import { useSelector } from "react-redux";
import { Outlet } from 'react-router-dom';

const PatientList = () => {
    const theme = useSelector((state: any) => state.theme.value.name)
    const [patients,setPatients] = useState<Array<Pationt>>([])
    const [reports,setReports] = useState<Array<any>>([])
    useConstructor(() => {
        Application.getPatients().then(res => {
            console.log(res)
            const resolved = res.data.map((el:any) => {
                return new Pationt({...el})
            })
            setPatients(resolved)
        })
        Application.getReports().then(res => {
            setReports(res.data)
        })
    })
    return (
        <>
        <div className="bg-black-background w-full h-screen px-8" >
            <div className={"py-5 space-y-5"}>
                <h1 className={"text-base text-primary-text font-medium"}>General Report</h1>
                <div className={"flex  items-center md:gap-0 gap-5 justify-between md:flex-row flex-col"}>
                    <NumberBox mode="added" value={reports.length>0?reports.filter(el=>el.key =='Total Enrollment')[0].value:0} title="Total Enrollment" theme={theme}/>
                    <NumberBox mode="increase" value={reports.length>0?reports.filter(el=>el.key =='Critical Patients')[0].value:0} title="Critical Patients" theme={theme}/>
                    <NumberBox mode="reduction" value={reports.length>0?reports.filter(el=>el.key =='At Risk Patients')[0].value:0} title="At Risk Patients" theme={theme}/>
                    <NumberBox mode="increase" value={reports.length>0?reports.filter(el=>el.key =='Normal Patients')[0].value:0} title="Normal Patients" theme={theme}/>
                </div>
            </div>            
            <Table classData={patients}></Table>
            <Outlet /> 
        </div>
        </>
    )
}

export default PatientList;