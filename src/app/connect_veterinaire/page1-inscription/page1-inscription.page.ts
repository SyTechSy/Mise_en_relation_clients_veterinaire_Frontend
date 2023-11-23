import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-page1-inscription',
  templateUrl: './page1-inscription.page.html',
  styleUrls: ['./page1-inscription.page.scss'],
})
export class Page1InscriptionPage implements OnInit {

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
    private veteService : VeterinaireService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.veteService.veterinaire.nom = this.nom;
    this.veteService.veterinaire.prenom = this.prenom;
    this.veteService.veterinaire.email = this.email;
    this.router.navigate( [`/page2-inscription`] ).then()
  }


}
