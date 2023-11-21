import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-information-modifier',
  templateUrl: './information-modifier.page.html',
  styleUrls: ['./information-modifier.page.scss'],
})
export class InformationModifierPage implements OnInit {

  // nom:string="";
  // prenom:string="";
  // email:string="";
  // numero:string="";
  // genre:string="";
  // langueParler:string="";
  // pays:string="";
  // quartier:string="";
  // rue: number | undefined;
  // codePostal:number | undefined;
  // diplomeOuCertificat:string="";
  // domaineSpecialisation:string="";
  // jours:string="";
  // mois:string="";
  // annee:string="";
  // anneeExperience:string="";
  // imageCV:string="";
  // motDePasse:string="";

  // veteconnect : Veterinaire | any;

  constructor(
    // private veteService: VeterinaireService,
    private router: Router,
  ) { }

  ngOnInit() {
    // this.veteconnect = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veterinaire")!));
  }

  

  // onSubmit() {
  //   let vete : Veterinaire = JSON.parse(localStorage.getItem("veterinaire")!);
  //   vete.nom = this.nom
  //   vete.prenom = this.prenom
  //   vete.email = this.email
  //   vete.numero = this.numero
  //   vete.genre = this.genre
  //   vete.langueParler = this.langueParler
  //   vete.pays = this.pays
  //   vete.quartier = this.quartier
  //   vete.rue = this.rue
  //   vete.codePostal = this.codePostal
  //   vete.diplomeOuCertificat = this.diplomeOuCertificat
  //   vete.domaineSpecialisation = this.domaineSpecialisation
  //   vete.jours = this.jours  
  //   vete.mois = this.mois
  //   vete.annee = this.annee
  //   vete.anneeExperience = this.anneeExperience
  //   vete.imageCV = this.imageCV
  //   vete.motDePasse = this.motDePasse
  //   this.veteService.modifierVeterinaire(this.veteconnect).subscribe((result) => {
  //     console.log("modification veterinaire", result);
  //     localStorage.setItem('veterinaire', JSON.stringify(result));
  //     this.router.navigate(['/profil-modification'])
  //   })
  // }


}
