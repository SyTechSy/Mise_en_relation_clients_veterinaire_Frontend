import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Medicament } from 'src/app/model/medicament';
import { MedicamentService } from 'src/app/monService/medicament.service';

@Component({
  selector: 'app-suivi-medicament',
  templateUrl: './suivi-medicament.page.html',
  styleUrls: ['./suivi-medicament.page.scss'],
})
export class SuiviMedicamentPage implements OnInit {
  listeMedicaments: Medicament[] = [];
  subscription: Subscription | undefined;

  affichemedi : Medicament | any

  constructor(private mediService : MedicamentService) { 
  }

  // ngOnInit() {
  //   this.affichemedi = Object.assign(new Medicament(),JSON.parse(localStorage.getItem("medicament")!));
    
  //   this.listeMedicaments = this.mediService.listMedicament();
  // }

  ngOnInit() {
    this.affichemedi = Object.assign(new Medicament(), JSON.parse(localStorage.getItem("medicament")!));

    this.subscription = this.mediService.listMedicament().subscribe(
      (medicaments: Medicament[]) => {
        this.listeMedicaments = medicaments; // Une fois les données récupérées, les assigner à listeMedicaments
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    );
  }

  ngOnDestroy() {
    // S'assurer de se désabonner lors de la destruction du composant pour éviter des fuites de mémoire
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}


/*
listeMedicaments: Medicament[] = [];

  constructor(private mediService: MedicamentService) {}

  ngOnInit() {
    // Charge ta liste de médicaments depuis ton service ou une autre source
    this.listeMedicaments = this.mediService.getMedicaments(); // Exemple de récupération des médicaments depuis un service
  }

*/