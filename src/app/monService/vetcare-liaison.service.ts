import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class VetcareLiaisonService {
  private user1: Utilisateur|undefined;

  private apiUrl : string = "http://localhost:9000/api/utilisateur";

  constructor(private http : HttpClient) { }

  utilisateur : Utilisateur = new Utilisateur();
  currentFile : File | undefined;
  /////////////// Pour l'inscription 1 de utilisateur
  inscriptionUtilisateur() {
    const formData = new FormData();
    formData.append("utilisateur", JSON.stringify ({
      "utilisateurId" : this.utilisateur.utilisateurId,
      "nom" : this.utilisateur.nom, 
      "prenom" : this.utilisateur.prenom,
      "email" : this.utilisateur.email,
      "motDePasse" : this.utilisateur.motDePasse,
      "numero" : this.utilisateur.numero,
      "genre" : this.utilisateur.genre,
      "dateNaissance" : this.utilisateur.dateNaissance,
      "quartier" : this.utilisateur.quartier,
      "description" :this.utilisateur.description,
      "photo" :this.utilisateur.photo,
    }))
    formData.append("image",this.currentFile!);
    return this.http.post(this.apiUrl+"/ajouter", formData);
  }

  

  /////////////// Pour modifier de utilisateur
  modifierUtilisateur(user : Utilisateur) {
    const formData = new FormData();
    formData.append("utilisateur", JSON.stringify( {
      "utilisateurId" : user.utilisateurId, 
      "nom" : user.nom, 
      "prenom" : user.prenom,
      "email" : user.email,
      "motDePasse" : user.motDePasse,
      "numero" : user.numero,
      "genre" : user.genre,
      "dateNaissance" : user.dateNaissance,
      "quartier" : user.quartier,
      "description" : user.description,
      "photo" : user.photo,
    }))
    formData.append("image", this.currentFile!);
    console.log("test",user)
    return this.http.put(this.apiUrl+"/modifier", formData);
  }


  /////////////// Pour la connexion de utilisateur
  connexionUtilisateur(email : string, motDePasse : string) {
    return this.http.get(`${this.apiUrl}/connexion?email=${email}&mot_de_passe=${motDePasse}`)
  }

  setUsers(user: Utilisateur){
    this.user1 = user;
  }
  getUser():Utilisateur|undefined{
    return this.user1
  }


}
