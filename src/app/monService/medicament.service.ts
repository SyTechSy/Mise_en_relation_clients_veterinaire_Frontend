import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Medicament } from '../model/medicament';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicamentService {
  private medi1: Medicament|undefined;

  private apiUrl : string = "http://localhost:9000/api/suiviMedicament"

  constructor(private http: HttpClient) { }

    medicament : Medicament = new Medicament;
    ajouterMedicaments() {
        return this.http.post(this.apiUrl+"/ajouter", {
          "suiviMedicamentId" : this.medicament.suiviMedicamentId,
          "dateDebut" : this.medicament.dateDebut,
          "dateFin" : this.medicament.dateFin,
          "nomMedicament" : this.medicament.nomMedicament,
          "nomAnimal" : this.medicament.nomAnimal,
          "frequense" : this.medicament.frequense,
          "dosage" : this.medicament.dosage,
          "reveil" : this.medicament.reveil,
          "description" : this.medicament.description,
    });
    }

    listMedicament(): Observable<Medicament[]> {
      return this.http.get<any[]>(this.apiUrl+ '/list').pipe(
        map((response: any[]) => {
          return response.map((item: any) => {
            return {
              suiviMedicamentId: item.suiviMedicamentId,
              dateDebut: item.dateDebut,
              dateFin: item.dateFin,
              nomMedicament: item.nomMedicament,
              nomAnimal: item.nomAnimal,
              frequense: item.frequense,
              dosage: item.dosage,
              reveil: item.reveil,
              description: item.description,
            } as Medicament;
          })
        })
      )
    }

    /*
    listMedicament(): Observable<Medicament[]> {
    return this.http.get<any[]>(this.apiUrl + '/list').pipe(
      map((response: any[]) => {
        // Assure-toi que la réponse est correctement transformée en un tableau de Medicament
        return response.map((item: any) => {
          // Ici, tu dois mapper les propriétés reçues de l'API à ton modèle Medicament
          return {
            suiviMedicamentId: item.suiviMedicamentId,
            dateDebut: item.dateDebut,
            dateFin: item.dateFin,
            // ... et ainsi de suite pour chaque propriété
          } as Medicament;
        });
      })
    );
  }

    */


    setMedi(medi: Medicament) {
      this.medi1 = medi;
    }

    getMedis():Medicament|undefined {
      return this.medi1
    }







    

  /////////////// Pour l'ajouter medicament
  
  //   ajouterMedicaments(
    //     dateDebut : string, dateFin : string, nomMedicament : string, nomAnimal : string, 
    //     frequense : string, reveil : string, descrition : string, dosage : string
    //   ) {
      //       return this.http.post(this.apiUrl+"/ajouter", {
        //         "dateDebut" : dateDebut,
        //         "dateFin" : dateFin,
        //         "nomMedicament" : nomMedicament,
        //         "nomAnimal" : nomAnimal,
        //         "frequense" : frequense,
        //         "dosage" : dosage,
        //         "reveil" : reveil,
        //         "description" : descrition,
        
        // });
  // }
        
}