import { Veterinaire } from "./veterinaire";

export class Planning {
    planningId? : number;
    heureDebut?: string;
    heureFin?: string;
    priorite?: number;
    veterinaire? : Veterinaire

    constructor(
        planningId? : number,  heureDebut?: string, 
        heureFin?: string, priorite?: number, veterinaire?: Veterinaire
    ) {
        this.planningId = planningId;
        this.heureDebut = heureDebut;
        this.heureFin = heureFin;
        this.priorite = priorite;
        this.veterinaire = veterinaire;
    }
}
