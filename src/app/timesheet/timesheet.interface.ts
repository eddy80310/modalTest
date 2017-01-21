export interface TimeSheet {
    jobNumber: string;
    workNumberFields: WorkNumberField[];
}

export interface WorkNumberField {
    workNumber: string;
    equipmentNumber: string;
}