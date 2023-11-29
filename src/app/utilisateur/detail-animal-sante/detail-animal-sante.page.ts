import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sante } from 'src/app/model/sante';
import { SanteService } from 'src/app/monService/sante.service';

@Component({
  selector: 'app-detail-animal-sante',
  templateUrl: './detail-animal-sante.page.html',
  styleUrls: ['./detail-animal-sante.page.scss'],
})
export class DetailAnimalSantePage implements OnInit {

  santeconnecte : Sante | any;

  public santeId : string | undefined;

  constructor(
    private santeService : SanteService,
    private router : Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.santeconnecte = Object.assign(new Sante(), JSON.parse(localStorage.getItem("santeAnimal")!));
    this.santeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.santeId);

    this.santeService.listSanteAnimalID(+this.santeId).subscribe((result) => {
      this.santeconnecte = result;
    },(error) => {
      console.log(error);
    })
  }

  chargerDonnee() {
    this.santeconnecte = Object.assign(new Sante(), JSON.parse(localStorage.getItem("santeAnimal")!));
    this.santeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.santeId);

    this.santeService.listSanteAnimalID(+this.santeId).subscribe((result) => {
      this.santeconnecte = result;
    },(error) => {
      console.log(error);
    })
  }

  public deleteSante(santeAnimalId: number | null) {
    if (santeAnimalId !== null) {
      const id: number = santeAnimalId;
      this.santeService.supprimerSante(id).subscribe(
        () => {
          console.log('Suppression réussie !');
          this.router.navigate(['/suivi-sante']);
        },
        (error) => {
          // console.error('message :', error.error.text);
          const dddd = error.error.text;
          if (dddd == "succès"){
            console.log("suppression reussi");
            this.chargerDonnee();
            this.router.navigate(['/suivi-sante']);
          } else {
            console.log("error",dddd)
          }
          // Traitez les erreurs ici si nécessaire
        }
      )
    }
  }

}
