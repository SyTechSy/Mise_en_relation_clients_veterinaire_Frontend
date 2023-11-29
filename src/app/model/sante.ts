import { Utilisateur } from "./utilisateur";

export class Sante {

    santeId? : number;
    nom? : string;
    race? : string;
    prioriteSexe? : string;
    age? : string;
    photo? : string;
    dateVaccin? : string;
    nomVaccin? : string;
    nomVeteVaccin? : string;
    dateTraitement? : string;
    nomTraitement? : string;
    nomVeteTraitement? : string;
    dateMaladie? : string;
    nomMaladie? : string;
    nomVeteMaladie? : string;
    poids? : string;
    description? : string;
    utilisateur? : Utilisateur;

    constructor(
        santeId? : number, nom? : string, race? : string, prioriteSexe? : string, age? : string,
        photo? : string, dateVaccin? : string, nomVaccin? : string,
        nomVeteVaccin? : string, dateTraitement? : string,
        nomTraitement? : string, nomVeteTraitement? : string,
        dateMaladie? : string, nomMaladie? : string,
        nomVeteMaladie? : string, poids? : string,
        description? : string, utilisateur? : Utilisateur,
    ) {
        this.santeId = santeId;
        this.nom = nom;
        this.race = race;
        this.prioriteSexe = prioriteSexe;
        this.age = age;
        this.photo = photo;
        this.dateVaccin = dateVaccin;
        this.nomVaccin = nomVaccin;
        this.nomVeteVaccin = nomVeteVaccin;
        this.dateTraitement = dateTraitement;
        this.nomTraitement = nomTraitement;
        this.nomVeteTraitement = nomVeteTraitement;
        this.dateMaladie = dateMaladie;
        this.nomMaladie = nomMaladie;
        this.nomVeteMaladie = nomVeteMaladie;
        this.poids = poids;
        this.description = description;
        this.utilisateur = utilisateur;
    }
}
