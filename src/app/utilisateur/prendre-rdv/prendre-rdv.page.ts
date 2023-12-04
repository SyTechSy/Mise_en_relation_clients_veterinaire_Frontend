import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { RdvService } from 'src/app/monService/rdv.service';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-prendre-rdv',
  templateUrl: './prendre-rdv.page.html',
  styleUrls: ['./prendre-rdv.page.scss'],
})
export class PrendreRdvPage implements OnInit {
  
  nom:string="";
  prenom:string="";
  adresse:string="";
  numero:string="";  
  especeAnimal:string="";
  ageAnimal:string="";
  jour:string="";
  mois:string="";
  annee:string="";
  priorite:string="";
  nonMaladie:string="";
  description:string="";

  veteconnect : Veterinaire | any;

  public veteriniareId : string | undefined;

  constructor(
    private rdvService : RdvService,
    private veterinaireService : VeterinaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veteriniare")!));
    this.veteriniareId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.veteriniareId);

    this.veterinaireService.listVeterinaireID(+this.veteriniareId).subscribe((result) => {
      this.veteconnect = result
    }, (error) => {
      console.log(error);
    })
  }

  charger() {
    this.veteconnect = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veteriniare")!));
    this.veteriniareId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.veteriniareId);

    this.veterinaireService.listVeterinaireID(+this.veteriniareId).subscribe((result) => {
      this.veteconnect = result
    }, (error) => {
      console.log(error);
    })
  }

  onSubmit() {
    this.rdvService.rdvservices.nom = this.nom;
    this.rdvService.rdvservices.prenom = this.prenom;
    this.rdvService.rdvservices.adresse = this.adresse;
    this.rdvService.rdvservices.numero = this.numero;
    // this.rdvService.rdvservices.Date = this.Date;
    // this.rdvService.rdvservices.creationTime = this.creationTime;
    this.rdvService.rdvservices.especeAnimal = this.especeAnimal;
    this.rdvService.rdvservices.ageAnimal = this.ageAnimal;
    this.rdvService.rdvservices.jour = this.jour;
    this.rdvService.rdvservices.mois = this.mois;
    this.rdvService.rdvservices.annee = this.annee;
    this.rdvService.rdvservices.priorite = this.priorite;
    this.rdvService.rdvservices.nonMaladie = this.nonMaladie;
    this.rdvService.rdvservices.description = this.description;
    this.rdvService.rdvservices.utilisateur = JSON.parse(localStorage.getItem("utilisateur")!);
    this.rdvService.prendreRdv().subscribe((result) => {
      console.log(result);
      console.log(this.rdvService);
      this.charger();
      this.router.navigate(['/mes-rdv'])
    })
  }

}
