import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-list-veterinaire',
  templateUrl: './list-veterinaire.page.html',
  styleUrls: ['./list-veterinaire.page.scss'],
})
export class ListVeterinairePage implements OnInit {
  listveterinaire: Veterinaire[] = [];
  subscription: Subscription | undefined;
  afficheveterinaire : Veterinaire | any


  public veteriniareId: string | null = null;

  constructor(
    private veteService: VeterinaireService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.afficheveterinaire = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
    this.subscription = this.veteService.listDesVeterinaire().subscribe(
      (veterinaires: Veterinaire[]) => {
        this.listveterinaire = veterinaires;
        console.log(this.listveterinaire);
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
