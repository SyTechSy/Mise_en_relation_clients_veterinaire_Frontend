export class Medicament {
    suiviMedicamentId? : number;
    dateDebut? : string;
    dateFin? : string;
    nomMedicament? : string;
    nomAnimal? : string;
    frequense? : string;
    dosage? : string;
    reveil? : string;
    description? : string;

    
    constructor( 
        suiviMedicamentId? : number, 
        dateDebut? : string, dateFin? : string, nomMedicament? : string, nomAnimal? : string, 
        frequense? : string, dosage? : string, reveil? : string, description? : string,
    ) {
        this.suiviMedicamentId = suiviMedicamentId
        this.dateDebut = dateDebut
        this.dateFin = dateFin
        this.nomMedicament = nomMedicament
        this.nomAnimal = nomAnimal
        this.frequense = frequense
        this.dosage = dosage
        this.reveil = reveil
        this.description = description
    }
}


