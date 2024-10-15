/* eslint-disable @typescript-eslint/no-explicit-any */
import Api from "./api";
// import allBiomarkers from './--moch--/data/Allbiomarkers.json';
import AllBloodtests from './--moch--/data/AllBloodtests.json'
// import Allactivities from './--moch--/data/Allactivities.json'
class Application extends Api {
  static getPatients() {
    const response = this.get("/patients");
    return response;
  }

  static addDataEntery(data:any) {
    return this.post('/data_entry/',data)
  }

  static getReports() {
    const response = this.post("/getreports", {});
    return response;
  }
  static getBiomarkers() {
    const response = this.get("/patients/allbiomarkers"); 
    return response;
  }
  static getDiagnosis() {
    const response = this.post("/getDiagnosis", {}); 
    return response;
  }
  static getAllBiomarkers() {
    const response = this.post("/getAllBiomarkers", {});
    return response;
  }
  static getBloodTest() {
    const response = this.post("/getBloodTest", {});
    return response;
  }
  static getgraphData() {
    const response = this.post("/ai_knowledge/show_ai_knowledge", {});
    return response;
  }
  static getActionPLan() {
    const response = this.post("/actionplan", {});
    return response;
  }
  static getBiomarkersByPatientId(member_id: number) {
    const response = Api.get('/patients/'+member_id+'/biomarkers')
    return response
    // const patient = allBiomarkers.find(p => p.patient_id === patient_id);
    // if (patient) {
    //   return { data: patient.biomarkers };
    // } else {
    //   return { data: [] };
    // }
  }
  static getActivityByPatientId(member_id: number) {
    const response = Api.get('/patients/'+member_id+'/analysis/activity')
    return response
    // const patient = Allactivities.find(p => p.patient_id === patient_id);
    // if (patient) {
    //   return { data: patient.activities };
    // } else {
    //   return { data: [] };
    // }
  }
  static getBloodTestByPatientId(patient_id: number) {
    const patient = AllBloodtests.find(p => p.patient_id === patient_id);
    if (patient) {
      return { data: patient.bloodTests };
    } else {
      return { data: [] };
    }
  }

  static addClient(data:any){
    const response = this.post("/patients/add_patient",data)
    return response
  }
static getAppoinments(patient_id: number){
  const response =  this.get(`/patients/`+patient_id+`/overview/appointments`)
  return response
}
static getSummary(member_id: number|string){
  const response =  this.get(`/summary/${member_id}`)
  return response
}

static updateSummary(data:any){
  const response =  this.post(`/summary/update` , data)
  return response
}
static generateTreatmentPlan(data:any){
  const response =  this.post(`/patients/generate_treatment_plan` , data)
  return response
}
static getTreatmentPlanDescriptions(member_id: number){
  const response =  this.get(`/patients/show-tplan-description/${member_id}`)
  return response
}
static getTreatmentPlanDetails(member_id: number){
  const response =  this.get(`/patients/show-benchmarks-details/${member_id}`)
  return response
}
static getTreatmentPlanModalData(data: any){
  const response =  this.post(`/patients/show_patient_benchmarks` , data)
  return response
}
static showPlanPriorities(){
  const response =  this.get(`/clinic/show-plan-priorities/`)
  return response
}
static downloadReport(data:any){
  const response =  this.post(`/patients/download_report` , data)
  return response
}
static downloadClinicReport(data:any){
  const response =  this.post(`/patients/download_clinic_report` , data)
  return response
}

  static updatePlanPriorities(data:any) {
    const response =  this.post(`/clinic/update-plan-priorities`,{
      edited_plan_priorities:data
    })
    return response    
  }
  static showPlanDescription(member_id:any) {
    const response =  this.get(`/patients/${member_id}/show-tplan-description`)
    return response    
  }
  static showTreatmentPlan(data:any) {
    const response =  this.post(`/patients/show_treatmentplan`,data)
    return response    
  }

  static getPatientReorders(member_id:string) {
    const response = this.post("/patients/priority_data",{member_id:member_id})
    return response
  }

  static savereport(data:any) {
    const response = this.post("/patients/save_report",data)
    return response
  }
  static saveLogo(data:any) {
    const response = this.post("/clinic/settings_update_logo",data)
    return response
  }
  static getLogoClinic() {
    const response = this.post("/clinic/settings_show_logo")
    return response
  }
  static aiStudio_patients() {
    const response = this.post("/ai_studio/patient_list")
    return response
  }
  static aiStudio_copilotChat(data: any) {
    const response = this.post("/ai_studio/copilot_chat",data)
    return response
  }
  static aiStudio_overview(data: any) {
    const response = this.post("/ai_studio/overview",data)
    return response
  }

  static getDocument(data:any) {
    const response = this.post("/ai_knowledge/get_documents",data)
    return response
  }

  static getWeeklyReport(data:any) {
    const response = this.post("/ai_studio/ai_studio_show_weekly_data",data)
    return response
  }

  static showReportList(data:any) {
    const response = this.post("/ai_studio/show_report_list",data)
    return response
  }  

  static ai_studio_generate_report(data:any) {
    const response = this.post("/ai_studio/ai_studio_generate_report",data)
    return response
  }    

  static ai_studio_update_weekly_data(data:any) {
    const response = this.post("/ai_studio/ai_studio_update_weekly_data",data)
    return response
  }      

  static getListChats(data:any){
    const response = this.post("/ai_studio/get_messages_id",data)
    return response
  }

  static generateWithAi(data:any){
    const response = this.post("/ai_studio/ai_studio_generate_report",data)
    return response
  }  

  static downloadReportForGenerate(data:any){
    const response = this.post("/ai_studio/download_weekly_report",data)
    return response
  }    

  static saveAiStadioReport(data:any){
    const response = this.post("/ai_studio/save_weekly_data",data)
    return response
  }     

  static getReportString(data:any){
    const response = this.post("/ai_studio/get_report_string",data)
    return response
  }  
  static showHistory(data:any){
    const response = this.post("/patients/show_treatment_plan_list",data)
    return response
  }  

  static addNoteHelth(data:any){
    const response = this.post("/clinic-user/add-notes",data)
    return response
  } 

  static AiStudioShowSavedReport(data:any){
    const response = this.post("/ai_studio/show_saved_report",data)
    return response
  }   

  static AiStudioEditSavedReport(data:any){
    const response = this.post("/ai_studio/edit_saved_report",data)
    return response
  }   

  static WeaklyReportGraph =(data:any) => {
    const response = this.post("/weekly_graph",data)
    return response
  }

  static getDataTracking =(data:any) => {
    const response = this.post("/summary/data_tracking_action",data)
    return response
  }  

  static getManualData = () => {
    const response = this.post("/ai_studio/manual_data_entry")
    return response    
  }

  static Gethistorical_graph = (data:any) => {
    const response = this.post("/historical_graph",data)
    return response     
  }

  static updateSetting = (data:any) => {
    const response = this.post("/clinic/update_setting/",data)
    return response     
  }

  static deleteClinic = (data:any) => {
    const response = this.post("/patients/delete_patient",data)
    return response     
  }  

  static saveTreatmentPaln =(data:any) => {
    const response = this.post("/save_treatment_plan",data)
    return response     
  }

  static UpdateTreatmentPlanWithAi =(data:any) =>{
    const response = this.post("/update_treatment_plan_with_ai",data)
    return response       
  }
}




export default Application;
