import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Rdv } from 'src/app/model/rdv';
import { RdvService } from 'src/app/monService/rdv.service';

@Component({
  selector: 'app-modifier-rdv',
  templateUrl: './modifier-rdv.page.html',
  styleUrls: ['./modifier-rdv.page.scss'],
})
export class ModifierRdvPage implements OnInit {
  
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

  modifierRdv : Rdv | any;

  public rdvId : string | undefined;

  constructor(
    private rdvService : RdvService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.modifierRdv = Object.assign(new Rdv(), JSON.parse(localStorage.getItem("utilisateur")!));
    this.rdvId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.rdvId);

    this.rdvService.listRdvID(+this.rdvId).subscribe((result) => {
      this.modifierRdv = result
    }, (error) => {
      console.log(error);
    })
  }

  chargerDonnee() {
    this.modifierRdv = Object.assign(new Rdv(), JSON.parse(localStorage.getItem("utilisateur")!));
    this.rdvId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.rdvId);

    this.rdvService.listRdvID(+this.rdvId).subscribe((result) => {
      this.modifierRdv = result
    }, (error) => {
      console.log(error);
    })
  }
  
  onSubmit() {
    this.rdvService.modifierRdv(this.modifierRdv).subscribe((result) => {
      this.chargerDonnee();
      this.router.navigate(['/detaille-rdv/'+this.rdvId]);
    })
  }
  

}
