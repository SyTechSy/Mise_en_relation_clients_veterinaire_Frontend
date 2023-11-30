import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
// import { error } from 'console';
import { Subscription } from 'rxjs';
import { Commentaire } from 'src/app/model/commentaire';
import { Planning } from 'src/app/model/planning';
import { Utilisateur } from 'src/app/model/utilisateur';
import { Veterinaire } from 'src/app/model/veterinaire';
import { CommentaireService } from 'src/app/monService/commentaire.service';
import { PlanningService } from 'src/app/monService/planning.service';

@Component({
  selector: 'app-home-veterinaire',
  templateUrl: './home-veterinaire.page.html',
  styleUrls: ['./home-veterinaire.page.scss'],
})
export class HomeVeterinairePage implements OnInit {

  listPlanning: Planning[] = [];
  subscription: Subscription | undefined;
  afficheplanning : Planning | any;

  ////////////////////////////////////

  listCommentaire : Commentaire[] = [];
  affichecommentaire : Commentaire | any;

  
  veteconnect: Veterinaire | any;
  userconnect: Utilisateur | any;
  // connectcomment: Commentaire | any;

  public planningId: string | null = null;

  constructor(
    private planningService : PlanningService,
    private commentaireService : CommentaireService,
    private router: Router,
    public alertController: AlertController
  ) { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {

    this.userconnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
    
    this.listCommentaire = Object.assign(new Commentaire(),JSON.parse(localStorage.getItem("utilisateur")!));
    this.subscription = this.commentaireService.listCommentaire().subscribe(
      (commentaires : Commentaire[]) => {
        this.listCommentaire = commentaires;
        console.log(this.listCommentaire);
      }
    )

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


  async confirmDelete(planningId: number | null) {
    const alert = await this.alertController.create({
      header: 'Confirmation de suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cet planning ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'confirm-button',
          handler: () => {
            // Action à effectuer si l'utilisateur clique sur Annuler
            console.log('Suppression annulée');
          }
        }, {
          text: 'Supprimer',
          cssClass: 'delete-button',
          handler: () => {
            // Action à effectuer si l'utilisateur clique sur Supprimer
            this.deletePlanning(planningId);
          }
        }
      ]
    });

    await alert.present();
  }

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
