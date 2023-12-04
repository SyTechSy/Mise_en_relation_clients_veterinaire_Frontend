import { Injectable } from '@angular/core';
import { Rdv } from '../model/rdv';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Commentaire } from '../model/commentaire';

@Injectable({
  providedIn: 'root'
})
export class RdvService {
  private plag1: Rdv |undefined;

  private apiUrl : string = "http://localhost:9000/api/rdv"

  constructor(private http : HttpClient) { }

  rdvservices : Rdv = new Rdv;
  ///////////////// PRENDRE
  prendreRdv() {
    console.log(this.rdvservices.utilisateur);
    return this.http.post(this.apiUrl+"/ajouter", this.rdvservices)
  }

  ///////////////// Modifier

  modifierRdv(plag : Rdv) {
    console.log(this.rdvservices.utilisateur);
    return this.http.put(this.apiUrl+"/modifier", {
      "rdvId" : plag.rdvId,
      "nom" : plag.nom,
      "prenom" : plag.prenom,
      "adresse" : plag.adresse,
      "numero" : plag.numero,
      "date" : plag.date,
      "especeAnimal" : plag.especeAnimal,
      "ageAnimal" : plag.ageAnimal,
      "jour" : plag.jour,
      "mois" : plag.mois,
      "annee" : plag.annee,
      "priorite" : plag.priorite,
      "nonMaladie" : plag.nonMaladie,
      "description" : plag.description,
      "utilisateur" : plag.utilisateur
    })
  }

  ////////////////////// Id pour rediriger la page par id

  listRdvID(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/rdv/'+id)
  }

  // ANNUler des Rdv

  annulerRdv(id: number) {
    return this.http.delete(this.apiUrl+"/supprimer/"+id);
  }
  
  
  ////////////////////

  listRdv(): Observable<Rdv[]> {
    return this.http.get<any[]>(this.apiUrl+ '/list')
  }

  ////////////////

  
  setMedi(plag: Rdv) {
    this.plag1 = plag;
  }

  getMedis(): Commentaire|undefined {
    return this.plag1
  }
}
