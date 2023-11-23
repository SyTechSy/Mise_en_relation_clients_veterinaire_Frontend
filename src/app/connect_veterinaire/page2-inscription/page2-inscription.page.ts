import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-page2-inscription',
  templateUrl: './page2-inscription.page.html',
  styleUrls: ['./page2-inscription.page.scss'],
})
export class Page2InscriptionPage implements OnInit {

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

  
  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  constructor(
      private veteService: VeterinaireService,
      private router: Router,
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.veteService.currentFile = this.selectedFile!;
    this.veteService.veterinaire.imagePRO = this.imagePRO;
    this.veteService.veterinaire.numero = this.numero;
    this.veteService.veterinaire.genre = this.genre;
    this.veteService.veterinaire.langueParler = this.langueParler;
    this.veteService.veterinaire.jours = this.jours;
    this.veteService.veterinaire.mois = this.mois;
    this.veteService.veterinaire.annee = this.annee;
    this.router.navigate( [`/page3-inscription`] ).then()
  }


  
    
  handleFileInput(event: any) {
    this.selectedFile = event.target.files[0];

    // Afficher l'image instantanément
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile);

      reader.onload = () => {
        this.selectedFileDataUrl = reader.result as string
        // this.medicament.photo = reader.result as string; // Stockez les données d'image
      };
    }
  }


}
