export interface PatientModel {
    name: string; 
    medicationList: MedList[];
}

export interface MedList {
    medName: string
    dosage: number
    route: string
    }