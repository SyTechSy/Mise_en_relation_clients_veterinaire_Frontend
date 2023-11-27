import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planning } from 'src/app/model/planning';
import { PlanningService } from 'src/app/monService/planning.service';

@Component({
  selector: 'app-modifier-heure',
  templateUrl: './modifier-heure.page.html',
  styleUrls: ['./modifier-heure.page.scss'],
})
export class ModifierHeurePage implements OnInit {

  public planningId: string | undefined
  
  heureDebut: string="";
  heureFin: string="";
  priorite: string = "1";

  modifiePlanning: Planning | any;

  constructor(
    private planningService : PlanningService,
    private router : Router,
    private http : HttpClient,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.modifiePlanning = Object.assign(new Planning(), JSON.parse(localStorage.getItem("planning")!));
    this.planningId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.planningId);

    this.planningService.listPlanningModifParId(+this.planningId).subscribe((result) => {
      this.modifiePlanning = result;
    }, (error) => {
      console.log(error);
    })
  }

  chargerDonnee() {
    this.modifiePlanning = Object.assign(new Planning(), JSON.parse(localStorage.getItem("planning")!));
    this.planningId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.planningId);

    this.planningService.listPlanningModifParId(+this.planningId).subscribe((result) => {
      this.modifiePlanning = result;
    }, (error) => {
      console.log(error);
    })
  }

  // onSubmit() {
  //   this.planningService.modifierPlanning(this.modifiePlanning).subscribe((result) => {
  //     this.chargerDonnee();
  //     this.router.navigate(['/tabs-v/home-veterinaire'])
  //   })
  // }

  public submitUpdate() {
    if (this.planningId) {
      this.planningService.modifierPlanning(this.modifiePlanning).subscribe((result) => {
        this.chargerDonnee();
        this.router.navigate(['/tabs-v/home-veterinaire'])
      })
    }
  }

}
