import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Planning } from 'src/app/model/planning';
import { Utilisateur } from 'src/app/model/utilisateur';
import { PlanningService } from 'src/app/monService/planning.service';

@Component({
  selector: 'app-home-veterinaire-vue-par-clients',
  templateUrl: './home-veterinaire-vue-par-clients.page.html',
  styleUrls: ['./home-veterinaire-vue-par-clients.page.scss'],
})
export class HomeVeterinaireVueParClientsPage implements OnInit {
  listplanning: Planning[] = [];
  subscription: Subscription | undefined;
  afficheplanning : Planning | any

  
  userconnect: Utilisateur | any;

  public planningId: string = "";

  constructor(
    private planningService : PlanningService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {
    this.userconnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
    this.planningId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.planningId)

    this.afficheplanning = Object.assign(new Planning(), JSON.parse(localStorage.getItem("veterinaire")!))
    this.subscription = this.planningService.listDesPlanning().subscribe(
      (plannings: Planning[]) => {
        this.listplanning = plannings;
        console.log(this.listplanning);
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

}
