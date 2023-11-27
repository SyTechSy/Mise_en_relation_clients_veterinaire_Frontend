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
    currentFile : File | undefined;
    ajouterMedicaments() {
      const formData = new FormData();
      formData.append("suiviMedicament", JSON.stringify ({
        "suiviMedicamentId" : this.medicament.suiviMedicamentId,
          "dateDebut" : this.medicament.dateDebut,
          "dateFin" : this.medicament.dateFin,
          "nomMedicament" : this.medicament.nomMedicament,
          "nomAnimal" : this.medicament.nomAnimal,
          "frequense" : this.medicament.frequense,
          "dosage" : this.medicament.dosage,
          "reveil" : this.medicament.reveil,
          "photo" : this.medicament.photo,
          "description" : this.medicament.description,
      }))
      formData.append("image",this.currentFile!);
      return this.http.post(this.apiUrl+"/ajouter", formData);
    }

    ////////////////// Liste les medicament 

  listMedicament(): Observable<Medicament[]> {
    const formData = new FormData();
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
            photo: item.photo,
          } as Medicament;
        })
      })
    )
  }

  //////////////////////// liste moi modifier medicament par Id
  listMedicamentId(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/suivi/'+id)
  }

    
  /////////////// Pour modifier un medicament
  modifierMedicament(medi : Medicament) {
    const formData = new FormData();
    formData.append("suiviMedicament", JSON.stringify( {
      "suiviMedicamentId" : medi.suiviMedicamentId, 
      "dateDebut" : medi.dateDebut, 
      "dateFin" : medi.dateFin,
      "nomMedicament" : medi.nomMedicament,
      "nomAnimal" : medi.nomAnimal,
      "frequense" : medi.frequense,
      "dosage" : medi.dosage,
      "reveil" : medi.reveil,
      "photo" : medi.photo,
      "description" : medi.description,
    }))
    formData.append("image", this.currentFile!);
    return this.http.put(this.apiUrl+"/modifier", formData);
  }

  ////////////// SUPPRESSION 

  supprimerMedicament(id: number) {
    return this.http.delete(this.apiUrl+"/supprimer/"+id);
  }


    setMedi(medi: Medicament) {
      this.medi1 = medi;
    }

    getMedis():Medicament|undefined {
      return this.medi1
    }


    // ajouterMedicamentAvecImage(suiviMedicament: any): Observable<any> {
    //   // Enregistrez le médicament sur le serveur JSON
    //   return this.http.post(`${this.apiUrl}`, suiviMedicament);
    // }




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
        