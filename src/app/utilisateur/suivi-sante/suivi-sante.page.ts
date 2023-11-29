import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Sante } from 'src/app/model/sante';
import { SanteService } from 'src/app/monService/sante.service';

@Component({
  selector: 'app-suivi-sante',
  templateUrl: './suivi-sante.page.html',
  styleUrls: ['./suivi-sante.page.scss'],
})
export class SuiviSantePage implements OnInit {

  listSanteAnimals: Sante[] = [];
  subscription: Subscription | undefined;
  afficheSanteAnimal : Sante | any;

  public santeId: string | null = null;

  constructor(
    private santeService : SanteService,
    private router : Router,
  ) { }

  ngOnInit() {
    this.afficheSanteAnimal = Object.assign(new Sante(), JSON.parse(localStorage.getItem("santeAnimal")!));
    this.subscription = this.santeService.listSanteAnimal().subscribe(
      (santes: Sante[]) => {
        this.listSanteAnimals = santes;
        console.log(this.listSanteAnimals);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    )
 }

 

 ngOnDestroy() {
  // S'assurer de se désabonner lors de la destruction du composant pour éviter des fuites de mémoire
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}


}
