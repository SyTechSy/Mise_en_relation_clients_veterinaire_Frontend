export class Utilisateur {
    utilisateurId? : number;
    nom? : string;
    prenom? : string;
    email? : string;
    motDePasse? : string;
    numero? : string;
    genre? : string;
    dateNaissance? : string;
    quartier? : string;
    description? : string;

    constructor( 
            utilisateurId? : number, 
            nom? : string, prenom? : string, email? : string, motDePasse? : string, 
            numero? : string, genre? : string, dateNaissance? : string, quartier? : string,
            description? : string
        ) {
        this.utilisateurId = utilisateurId;
        this.nom = nom;
        this.prenom = prenom;
        this.email = email;
        this.motDePasse = motDePasse;
        this.numero = numero;
        this.genre = genre;
        this.dateNaissance = dateNaissance;
        this.quartier = quartier;
        this.description = description
    }
}
