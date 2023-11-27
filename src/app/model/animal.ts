export class Animal {
    suiviSanterId? : number;
    nom? : string;
    age? : string;
    categorie? : string;
    photo? : string;
    priorite? : string;
    description? : string;

    constructor(
        suiviSanterId? : number, nom? : string, 
        age? : string, categorie? : string, photo? : string, 
        priorite? : string, description? : string, 
    ) {
        
        this.suiviSanterId = suiviSanterId
        this.nom = nom
        this.age = age
        this.categorie = categorie
        this.photo = photo
        this.priorite = priorite
        this.description = description
    }
}
