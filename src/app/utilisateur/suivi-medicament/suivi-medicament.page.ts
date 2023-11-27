import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  
  public suiviMedicamentId: string | null = null;

  constructor(
    private mediService : MedicamentService,
    private router : Router,
    ) { 
  }


  ngOnInit() {
    this.affichemedi = Object.assign(new Medicament(), JSON.parse(localStorage.getItem("medicament")!));
    this.subscription = this.mediService.listMedicament().subscribe(
      (medicaments: Medicament[]) => {
        this.listeMedicaments = medicaments;
        console.log(this.listeMedicaments); // Une fois les données récupérées, les assigner à listeMedicaments
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
      
    );
  }

  chargerDonnee(){
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

  // public deleteMedicament(suiviMedicamentId: number | null) {
  //   if (suiviMedicamentId !== null) {
  //     const id: number = suiviMedicamentId; // Convertir suiviMedicamentId en number
  //     this.mediService.supprimerMedicament(id).subscribe((data) => {
  //       this.router.navigate(['/']);
  //     });
  //   }
  // }
  
  public deleteMedicament(suiviMedicamentId: number | null) {
    if (suiviMedicamentId !== null) {
      const id: number = suiviMedicamentId;
      this.mediService.supprimerMedicament(id).subscribe(
        () => {
          console.log('Suppression réussie !');
          this.router.navigate(['/suivi-medicament']);
        },
        (error) => {
          // console.error('message :', error.error.text);
          const dddd = error.error.text;
          if (dddd == "succès"){
            console.log("suppression reussi");
            this.chargerDonnee();
            this.router.navigate(['/suivi-medicament']);
          } else {
            console.log("error",dddd)
          }
          // Traitez les erreurs ici si nécessaire
        }
      );
    }
  }
  


}
/*
 public clickDeleteMedicament(medicamentID: string | undefined) {
    if (medicamentID) {
      this.medicamentService.deleteMedicament(medicamentID).subscribe( (data) => {
        // Suppression réussie, maintenant redirigez vers la page de liste des médicaments        this.getAllMedicamentFormServer
        this.router.navigate(['/medicaments']);
      },  (error) => {
        this.errorMessage = error;
      });
    }
  }

*/



















































  // ngOnInit() {
  //   this.affichemedi = Object.assign(new Medicament(),JSON.parse(localStorage.getItem("medicament")!));
    
  //   this.listeMedicaments = this.mediService.listMedicament();
  // }

/*
listeMedicaments: Medicament[] = [];

  constructor(private mediService: MedicamentService) {}

  ngOnInit() {
    // Charge ta liste de médicaments depuis ton service ou une autre source
    this.listeMedicaments = this.mediService.getMedicaments(); // Exemple de récupération des médicaments depuis un service
  }

*/