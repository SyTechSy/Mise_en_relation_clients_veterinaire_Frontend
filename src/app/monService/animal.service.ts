import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal } from '../model/animal';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private ani1: Animal|undefined;

  private apiUrl : string = "http://localhost:9000/api/suiviSante"


  constructor(
    private http: HttpClient
  ) { }

  animal : Animal = new Animal;
  currentFile : File | undefined;
  ajouterAnimal() {
    const formData = new FormData();
    formData.append("suiviSante", JSON.stringify ( {
      "suiviSanterId" : this.animal.suiviSanterId,
      "nom" : this.animal.nom,
      "age" : this.animal.age,
      "categorie" : this.animal.categorie,
      "photo" : this.animal.photo,
      "priorite" : this.animal.priorite,
      "description" : this.animal.description,
    }))
    formData.append("image",this.currentFile!);
    return this.http.post(this.apiUrl+"/ajouter", formData);
  }


  listAnimal(): Observable<Animal[]> {
    const formData = new FormData();
    return this.http.get<any[]>(this.apiUrl+ '/list').pipe(
      map((response: any[]) => {
        return response.map((item: any) => {
          return {
            suiviSanterId: item.suiviSanterId,
            nom: item.nom,
            age: item.age,
            categorie: item.categorie,
            photo: item.photo,
            priorite: item.priorite,
            description: item.description,
          } as Animal;
        })
      })
    )
  }

////////////////////// Id pour rediriger la page par id

  listAnimalID(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/suivi/'+id)
  }

  /////////////// Pour modifier un animal
  modifierAnimal(ani : Animal) {
    const formData = new FormData();
    formData.append("suiviSante", JSON.stringify( {
      "suiviSanterId" : ani.suiviSanterId,
      "nom" : ani.nom,
      "age" : ani.age,
      "categorie" : ani.categorie,
      "photo" : ani.photo,
      "priorite" : ani.priorite,
      "description" : ani.description,
    }))
    formData.append("image", this.currentFile!);
    return this.http.put(this.apiUrl+ "/modifier", formData);
  }

  ////////////// SUPPRESSION 

  supprimerAnimal(id: number) {
    return this.http.delete(this.apiUrl+"/supprimer/"+id);
  }

  
  setAni(ani: Animal) {
    this.ani1 = ani;
  }

  getAnis(): Animal|undefined {
    return this.ani1
  }



}
