import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlanningService } from 'src/app/monService/planning.service';

@Component({
  selector: 'app-ajouter-heure',
  templateUrl: './ajouter-heure.page.html',
  styleUrls: ['./ajouter-heure.page.scss'],
})
export class AjouterHeurePage implements OnInit {

  heureDebut: string="";
  heureFin: string="";
  priorite: string = "1";

  constructor(
    private planningService : PlanningService,
    private router : Router,
    private http : HttpClient
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.planningService.planning.heureDebut = this.heureDebut;
    this.planningService.planning.heureFin = this.heureFin;
    this.planningService.planning.priorite = +this.priorite;
    this.planningService.planning.veterinaire = JSON.parse(localStorage.getItem("veterinaire")!)
    this.planningService.ajouterPlanning().subscribe((result) => {
      console.log(result);
      this.router.navigate( [`/tabs-v/home-veterinaire`] ).then()
    })
    
  }

}
