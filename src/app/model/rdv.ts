import { Utilisateur } from "./utilisateur";

export class Rdv {
    
    rdvId? : number;
    nom? : string;
    prenom? : string;
    adresse? : string;
    numero? : string;
    date? : string;
    creationTime? : string;
    especeAnimal? : string;
    ageAnimal? : string;
    jour? : string;
    mois? : string;
    annee? : string;
    priorite? : string;
    nonMaladie? : string;
    description? : string;
    utilisateur? : Utilisateur;

    constructor(
        rdvId? : number,
        nom? : string,
        prenom? : string,
        adresse? : string,
        numero? : string,
        date? : string,
        creationTime? : string,
        especeAnimal? : string,
        ageAnimal? : string,
        jour? : string,
        mois? : string,
        annee? : string,
        priorite? : string,
        nonMaladie? : string,
        description? : string,
        utilisateur? : Utilisateur
    ) {
        this.rdvId = rdvId;
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.numero = numero;
        this.date = date;
        this.creationTime = creationTime;
        this.especeAnimal = especeAnimal;
        this.ageAnimal = ageAnimal;
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
        this.priorite = priorite;
        this.nonMaladie = nonMaladie;
        this.description = description;
        this.utilisateur = utilisateur;
    }



}
