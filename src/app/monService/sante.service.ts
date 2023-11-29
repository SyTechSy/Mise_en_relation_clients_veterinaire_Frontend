import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sante } from '../model/sante';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SanteService {

  private modification1 : Sante | undefined;

  private apiUrl : string = "http://localhost:9000/api/santeAnimal"

  constructor(private http: HttpClient) { }

  sante : Sante = new Sante;
  currentFile : File | undefined;
  ajouterSanteAnimal() {
    const formData = new FormData();
    formData.append('santeAnimal', JSON.stringify ({
      "santeId" : this.sante.santeId,
      "nom" : this.sante.nom,
      "race" : this.sante.race,
      "prioriteSexe" : this.sante.prioriteSexe,
      "age" : this.sante.age,
      "photo" : this.sante.photo,
      "dateVaccin" : this.sante.dateVaccin,
      "nomVaccin" : this.sante.nomVaccin,
      "nomVeteVaccin" : this.sante.nomVeteVaccin,
      "dateTraitement" : this.sante.dateTraitement,
      "nomTraitement" : this.sante.nomTraitement,
      "nomVeteTraitement" : this.sante.nomVeteTraitement,
      "dateMaladie" : this.sante.dateMaladie,
      "nomMaladie" : this.sante.nomMaladie,
      "nomVeteMaladie" : this.sante.nomVeteMaladie,
      "poids" : this.sante.poids,
      "description" : this.sante.description,
      "utilisateur" : this.sante.utilisateur,
    }))
    formData.append("image",this.currentFile!);
    return this.http.post(this.apiUrl+"/ajouter", formData);
  }

 ////////////////// Liste les medicament 

  listSanteAnimal(): Observable<Sante[]> {
    const formData = new FormData();
    return this.http.get<any[]>(this.apiUrl+ '/list').pipe(
      map((response : any[]) => {
        return response.map((item : any) => {
          return {
            santeId: item.santeId,
            nom: item.nom,
            race: item.race,
            prioriteSexe: item.prioriteSexe,
            age: item.age,
            photo: item.photo,
            dateVaccin: item.dateVaccin,
            nomVaccin: item.nomVaccin,
            nomVeteVaccin: item.nomVeteVaccin,
            dateTraitement: item.dateTraitement,
            nomTraitement: item.nomTraitement,
            nomVeteTraitement: item.nomVeteTraitement,
            dateMaladie: item.dateMaladie,
            nomMaladie: item.nomMaladie,
            nomVeteMaladie: item.nomVeteMaladie,
            poids: item.poids,
            description: item.description,
            // utilisateur: item.utilisateur,
          } as Sante;
        }) 
      })
    )
  }


  ///////////////////////////// voir par ID

  listSanteAnimalID(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/sante/'+id)
  }

  modifierSanteAnimal(modification : Sante) {
    const formData = new FormData();
    formData.append("santeAnimal", JSON.stringify({
      "santeId": modification.santeId,
      "nom": modification.nom,
      "race": modification.race,
      "prioriteSexe" : modification.prioriteSexe,
      "age" : modification.age,
      "photo" : modification.photo,
      "dateVaccin" : modification.dateVaccin,
      "nomVaccin" : modification.nomVaccin,
      "nomVeteVaccin" : modification.nomVeteVaccin,
      "dateTraitement" : modification.dateTraitement,
      "nomTraitement" : modification.nomTraitement,
      "nomVeteTraitement" : modification.nomVeteTraitement,
      "dateMaladie" : modification.dateMaladie,
      "nomMaladie" : modification.nomMaladie,
      "nomVeteMaladie" : modification.nomVeteMaladie,
      "poids" : modification.poids,
      "description" : modification.description,
      "utilisateur" : modification.utilisateur,
    }))
    formData.append("image", this.currentFile!);
    return this.http.put(this.apiUrl+ "/modifier", formData);
  }


  

  ////////////// SUPPRESSION 

  supprimerSante(id: number) {
    return this.http.delete(this.apiUrl+"/supprimer/"+id);
  }

  
  
  setAni(modification: Sante) {
    this.modification1 = modification;
  }

  getAnis(): Sante|undefined {
    return this.modification1
  }



}
