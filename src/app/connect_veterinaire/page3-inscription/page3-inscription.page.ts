import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-page3-inscription',
  templateUrl: './page3-inscription.page.html',
  styleUrls: ['./page3-inscription.page.scss'],
})
export class Page3InscriptionPage implements OnInit {


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
  imagePRO:string="";
  motDePasse:string="";

  constructor(
      private veteService: VeterinaireService,
      private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.veteService.veterinaire.pays = this.pays;
    this.veteService.veterinaire.quartier = this.quartier;
    this.veteService.veterinaire.rue = this.rue;
    this.veteService.veterinaire.codePostal = this.codePostal;
    this.router.navigate( [`/page4-inscription`] ).then()
  }

}
