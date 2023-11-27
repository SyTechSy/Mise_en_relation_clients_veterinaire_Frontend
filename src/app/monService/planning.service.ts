import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planning } from '../model/planning';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {
  private plag1: Planning |undefined;

  private apiUrl : string = "http://localhost:9000/api/planning"

  constructor(private http : HttpClient) { }

  //////// Ajouter
  planning : Planning = new Planning;
  ajouterPlanning() {
    console.log(this.planning.veterinaire);
    return this.http.post(this.apiUrl+"/ajouter", this.planning)
  }


  /// List
  listDesPlanning(): Observable<Planning[]> {
    return this.http.get<any[]>(this.apiUrl+ '/list')
  }

  // ...................... List des planning qui va être modifier par id 

  listPlanningModifParId(id : number) {
    return this.http.get<any[]>(this.apiUrl+ '/planning/'+id)
  }

  /// POUR LA MODIFICATION

  modifierPlanning(plag : Planning) {
    const formData = new FormData();
    formData.append("planning", JSON.stringify( {
      "planningId" : plag.planningId,
      "heureDebut" : plag.heureDebut,
      "heureFin" : plag.heureFin,
      "veterinaire" : plag.veterinaire
    }))
    return this.http.put(this.apiUrl+"/modifier", formData);
  }

  // SUPPRESSION des PLANNINGs

  supprimerPlanning(id: number) {
    return this.http.delete(this.apiUrl+"/supprimer/"+id);
  }

  setMedi(plag: Planning) {
    this.plag1 = plag;
  }

  getMedis():Planning|undefined {
    return this.plag1
  }

}