export interface ProjectDescription {
      userName?: string;
      date?:string;
     projectName?: string;
      projectCode?:number
      projectCost?: number;
     fundingAgency?: string;
     executingAgency?:string;
      projectStatus?:string;
      continent?:string;
      country?:string;
      climate?:string;
      moisture?:string;
      soilType?:string;
      implementationPhase?:number;
      capitalizationPhase?: number;
      totalDurationOfAccounting?: number;
      source?:string;
      co2?: number;
      ch4?: number;
      n2o?: number;
}