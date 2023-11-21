import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-page5-inscription',
  templateUrl: './page5-inscription.page.html',
  styleUrls: ['./page5-inscription.page.scss'],
})
export class Page5InscriptionPage implements OnInit {

  nom:string="";
  prenom:string="";
  email:string="";
  numero:string="";
  genre:string="";
  langueParler:string="";
  pays:string="";
  quartier:string="";
  rue: number | undefined;
  codePostal:number | undefined;
  diplomeOuCertificat:string="";
  domaineSpecialisation:string="";
  jours:string="";
  mois:string="";
  annee:string="";
  anneeExperience:string="";
  imageCV:string="";
  motDePasse:string="";

  constructor(
      private veteService: VeterinaireService,
      private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.veteService.veterinaire.motDePasse = this.motDePasse;
    console.log(this.veteService.veterinaire);
    this.veteService.inscriptionVeterinaire().subscribe((result) => {
      console.log(result);
      this.router.navigate( [`/connexion-veterinaire`] ).then()
    })
  }

  
}
