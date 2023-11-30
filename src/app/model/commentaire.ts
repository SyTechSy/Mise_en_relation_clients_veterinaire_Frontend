import { Utilisateur } from "./utilisateur";

export class Commentaire {

    commentaireId? : number;
    content?: string;
    date?: string;
    creationTime?: string;
    utilisateur? : Utilisateur

    constructor(
        planningId? : number,  content?: string, date?: string, creationTime?: string, utilisateur?: Utilisateur
    ) {
        this.commentaireId = this.commentaireId;
        this.content = content;
        this.date = date;
        this.creationTime = creationTime;
        this.utilisateur = utilisateur;
    }
}
