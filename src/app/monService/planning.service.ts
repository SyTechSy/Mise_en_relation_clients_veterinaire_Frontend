import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Planning } from '../model/planning';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

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
}
