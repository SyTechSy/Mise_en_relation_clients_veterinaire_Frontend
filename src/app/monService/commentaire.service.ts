import { Injectable } from '@angular/core';
import { Commentaire } from '../model/commentaire';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  private plag1: Commentaire |undefined;

  private apiUrl : string = "http://localhost:9000/api/commentaire"

  constructor(private http : HttpClient) { }

  commentaire : Commentaire = new Commentaire;
  ajouterCommentaire() {
    console.log(this.commentaire.utilisateur);
    return this.http.post(this.apiUrl+"/add", this.commentaire)
  }


  
  ////////////////////

  listCommentaire(): Observable<Commentaire[]> {
    return this.http.get<any[]>(this.apiUrl+ '/list')
  }

  ////////////////

  
  setMedi(plag: Commentaire) {
    this.plag1 = plag;
  }

  getMedis(): Commentaire|undefined {
    return this.plag1
  }

}
