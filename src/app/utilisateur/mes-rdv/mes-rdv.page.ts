import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Rdv } from 'src/app/model/rdv';
import { RdvService } from 'src/app/monService/rdv.service';

@Component({
  selector: 'app-mes-rdv',
  templateUrl: './mes-rdv.page.html',
  styleUrls: ['./mes-rdv.page.scss'],
})
export class MesRdvPage implements OnInit {
  listrdv : Rdv[] = [];
  subscription: Subscription | undefined;
  afficherdv : Rdv | any


  private rdvId : string | null = null;

  constructor(
    private rdvService : RdvService,
    private router : Router,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.afficherdv = Object.assign(new Rdv(),JSON.parse(localStorage.getItem("utilisateur")!));
    this.subscription = this.rdvService.listRdv().subscribe(
      (rdvs: Rdv[]) => {
        this.listrdv = rdvs;
        console.log(this.listrdv);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
  }

  chargerDonnee() {
    this.afficherdv = Object.assign(new Rdv(),JSON.parse(localStorage.getItem("utilisateur")!));
    this.subscription = this.rdvService.listRdv().subscribe(
      (rdvs: Rdv[]) => {
        this.listrdv = rdvs;
        console.log(this.listrdv);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
  }

  async confirmDelete(rdvId: number | null) {
    const alert = await this.alertController.create({
      header: 'Confirmation de suppression',
      message: 'Êtes-vous sûr de vouloir supprimer cet rendez-vous ?',
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
            this.deleteRdv(rdvId);
          }
        }
      ]
    });

    await alert.present();
  }


  public deleteRdv(rdvId: number | null) {
    if (rdvId !== null) {
      const id: number = rdvId;
      this.rdvService.annulerRdv(id).subscribe(
        () => {
          console.log('Suppression réussie !');
          this.router.navigate(['/mes-rdv']);
        },
        (error) => {
          // console.error('message :', error.error.text);
          const dddd = error.error.text;
          if (dddd == "succès"){
            console.log("suppression reussi");
            this.chargerDonnee();
            this.router.navigate(['/mes-rdv']);
          } else {
            console.log("error",dddd)
          }
          // Traitez les erreurs ici si nécessaire
        }
      )
    }
  }
  

}
