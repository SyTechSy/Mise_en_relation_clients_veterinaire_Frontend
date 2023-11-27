import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/monService/animal.service';

@Component({
  selector: 'app-detail-suivi-animal',
  templateUrl: './detail-suivi-animal.page.html',
  styleUrls: ['./detail-suivi-animal.page.scss'],
})
export class DetailSuiviAnimalPage implements OnInit {
  // listAnimal: Animal
  animalconnect : Animal | any;

  public suiviSanterId: string | undefined;

  constructor(
    private animauxService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.animalconnect = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.suiviSanterId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviSanterId);

    this.animauxService.listAnimalID(+this.suiviSanterId).subscribe((result) => {
      this.animalconnect = result
    }, (error) => {
      console.log(error);
    })
  }

  chargerDonnee() {
    this.animalconnect = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.suiviSanterId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviSanterId);

    this.animauxService.listAnimalID(+this.suiviSanterId).subscribe((result) => {
      this.animalconnect = result
    }, (error) => {
      console.log(error);
    })
  }


  public deleteAnimal(suiviSanterId: number | null) {
    if (suiviSanterId !== null) {
      const id: number = suiviSanterId;
      this.animauxService.supprimerAnimal(id).subscribe(
        () => {
          console.log('Suppression réussie !');
          this.router.navigate(['/suivi-animal']);
        },
        (error) => {
          // console.error('message :', error.error.text);
          const dddd = error.error.text;
          if (dddd == "succès"){
            console.log("suppression reussi");
            this.chargerDonnee();
            this.router.navigate(['/suivi-animal']);
          } else {
            console.log("error",dddd)
          }
          // Traitez les erreurs ici si nécessaire
        }
      );
    }
  }


}
