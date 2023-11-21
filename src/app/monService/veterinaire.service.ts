import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Veterinaire } from '../model/veterinaire';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireService {
  private vete1: Veterinaire|undefined;

  private apiUrl : string = "http://localhost:9000/api/veterinaire";

  constructor(private http : HttpClient) { }

  veterinaire : Veterinaire = new Veterinaire();

  inscriptionVeterinaire() {
    const formData = new FormData();
    formData.append("veterinaire",JSON.stringify({
      "veteriniareId" : this.veterinaire.veteriniareId,
      "nom" : this.veterinaire.nom, 
      "prenom" : this.veterinaire.prenom,
      "email" : this.veterinaire.email,
      "numero" : this.veterinaire.numero,
      "genre" : this.veterinaire.genre,
      "langueParler" : this.veterinaire.langueParler,
      "pays" : this.veterinaire.pays,
      "quartier" : this.veterinaire.quartier,
      "rue" :this.veterinaire.rue,
      "codePostal" :this.veterinaire.codePostal,
      "diplomeOuCertificat" :this.veterinaire.diplomeOuCertificat,
      "domaineSpecialisation" :this.veterinaire.domaineSpecialisation,
      "jours" :this.veterinaire.jours,
      "mois" :this.veterinaire.mois,
      "annee" :this.veterinaire.annee,
      "anneeExperience" :this.veterinaire.anneeExperience,
      "imageCV" :this.veterinaire.imageCV,
      "motDePasse" :this.veterinaire.motDePasse,
    }))
    return this.http.post(this.apiUrl+"/ajouter", formData)
  }


  ///////////////////////// Modification 

  

  modifierVeterinaire(vete : Veterinaire) {
    console.log("test pour veterinaire", vete)
    const formData = new FormData();
    formData.append("veterinaire",JSON.stringify({
      "veteriniareId" : vete.veteriniareId,
      "nom" : vete.nom, 
      "prenom" : vete.prenom,
      "email" : vete.email,
      "numero" : vete.numero,
      "genre" : vete.genre,
      "langueParler" : vete.langueParler,
      "pays" : vete.pays,
      "quartier" : vete.quartier,
      "rue" : vete.rue,
      "codePostal" : vete.codePostal,
      "diplomeOuCertificat" : vete.diplomeOuCertificat,
      "domaineSpecialisation" : vete.domaineSpecialisation,
      "jours" : vete.jours,
      "mois" : vete.mois,
      "annee" : vete.annee,
      "anneeExperience" : vete.anneeExperience,
      "imageCV" : vete.imageCV,
      "motDePasse" : vete.motDePasse,
    }))
    return this.http.put(this.apiUrl+"/modifier", formData)
  }


    /////////////// Pour la connexion de veterinaire
    connexionVeterinaire(email : string, motDePasse : string) {
      return this.http.get(`${this.apiUrl}/connexion?email=${email}&mot_de_passe=${motDePasse}`)
    }

  setVetes(vete: Veterinaire){
    this.vete1 = vete;
  }
  getVetes():Veterinaire|undefined{
    return this.vete1
  }


}
