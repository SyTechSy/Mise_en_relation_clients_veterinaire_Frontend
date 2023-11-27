import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { error } from 'console';
import { Subscription } from 'rxjs';
import { Planning } from 'src/app/model/planning';
import { Veterinaire } from 'src/app/model/veterinaire';
import { PlanningService } from 'src/app/monService/planning.service';

@Component({
  selector: 'app-home-veterinaire',
  templateUrl: './home-veterinaire.page.html',
  styleUrls: ['./home-veterinaire.page.scss'],
})
export class HomeVeterinairePage implements OnInit {

  listPlanning: Planning[] = [];
  subscription: Subscription | undefined;
  afficheplanning : Planning | any

  
  veteconnect: Veterinaire | any;

  public planningId: string | null = null;

  constructor(
    private planningService : PlanningService,
    private router: Router,
  ) { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
    this.listPlanning = Object.assign(new Planning(),JSON.parse(localStorage.getItem("veterinaire")!))
    this.subscription = this.planningService.listDesPlanning().subscribe(
      (planning : Planning[]) => {
        this.listPlanning = planning;
        console.log(this.listPlanning);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
    this.presentingElement = document.querySelector('.profil_verifier_container');
    this.presentingElement = document.querySelector('.ion-page');
  }


  chargerDonnee() {
    this.veteconnect = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
    this.listPlanning = Object.assign(new Planning(),JSON.parse(localStorage.getItem("veterinaire")!))
    this.subscription = this.planningService.listDesPlanning().subscribe(
      (planning : Planning[]) => {
        this.listPlanning = planning;
        console.log(this.listPlanning);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
    this.presentingElement = document.querySelector('.profil_verifier_container');
    this.presentingElement = document.querySelector('.ion-page');
  }

  
  ngOnDestroy() {
    // S'assurer de se désabonner lors de la destruction du composant pour éviter des fuites de mémoire
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // public deletePlanning(planningId: number | null) {
  //   if (planningId != null) {
  //     const id: number = planningId;
  //     this.planningService.supprimerPlanning(id).subscribe(
  //       () => {
  //         console.log('Suppression réussie !');
  //         this.router.navigate(['/tabs-v/home/veterinaire']);
  //       },
  //       (error) => {
  //         const dddd = error.error.text;
  //         if (dddd == "Succès") {
  //           console.log("suppression reussi avec succès");
  //           this.router.navigate(['/tabs-v/home/veterinaire']);
  //         } else {
  //           console.log("error", dddd)
  //         }
  //       }
  //     )
  //   }
  // }

  public deletePlanning(planningId: number | null) {
    if (planningId != null) {
      const id: number = planningId;
      this.planningService.supprimerPlanning(id).subscribe(
        () => {
          console.log('Suppression de cette planning a été effectuer avec succès !');
        this.router.navigate(["/tabs-v/home-veterinaire"])
      }, 
      (error) => {
        const dddd = error.error.text;
          if (dddd == "succès"){
            console.log("suppression reussi");
            this.chargerDonnee();
            this.router.navigate(['/tabs-v/home-veterinaire']);
          } else {
            console.log("error",dddd)
          }
      })
    }
  }


}
