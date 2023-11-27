import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/monService/animal.service';

@Component({
  selector: 'app-suivi-animal',
  templateUrl: './suivi-animal.page.html',
  styleUrls: ['./suivi-animal.page.scss'],
})
export class SuiviAnimalPage implements OnInit {

  listAnimals: Animal[] = [];
  subscription: Subscription | undefined;
  afficheAnimal : Animal | any

  public suiviSanterId: string | null = null;

  constructor(
    private animauxService: AnimalService,
    private router: Router, 
  ) { }

  ngOnInit() {
    this.afficheAnimal = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.subscription = this.animauxService.listAnimal().subscribe( 
      (animals: Animal[]) => {
        this.listAnimals = animals;
        console.log(this.listAnimals);
      },
      (error) => {
        // Gérer les erreurs ici
        console.error(error);
      }
    ) 
  }

  chargerDonnee() {
    this.afficheAnimal = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.subscription = this.animauxService.listAnimal().subscribe(
      (animals: Animal[]) => {
        this.listAnimals = animals;
        console.log(this.listAnimals);
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
