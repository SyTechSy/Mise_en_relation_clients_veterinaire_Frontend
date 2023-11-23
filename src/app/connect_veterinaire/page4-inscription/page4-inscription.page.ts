import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-page4-inscription',
  templateUrl: './page4-inscription.page.html',
  styleUrls: ['./page4-inscription.page.scss'],
})
export class Page4InscriptionPage implements OnInit {

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
  // imageCV:string="";
  imagePRO:string="";
  motDePasse:string="";

  constructor(
      private veteService: VeterinaireService,
      private router: Router,
      private http: HttpClient
    ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.veteService.veterinaire.diplomeOuCertificat = this.diplomeOuCertificat;
    this.veteService.veterinaire.domaineSpecialisation = this.domaineSpecialisation;
    this.veteService.veterinaire.anneeExperience = this.anneeExperience;
    // this.veteService.veterinaire.imageCV = this.imageCV;
    this.router.navigate( [`/page4-inscription`] ).then()
  }


  
  // La creation de l'image 
  selectedFile1: File | null = null;
  selectedFileDataUrl: string | null = null;

  
  handleFileInput(event: any) {
    this.selectedFile1 = event.target.files[0];

    // Afficher l'image instantanément
    if (this.selectedFile1) {
      const reader = new FileReader();
      reader.readAsDataURL(this.selectedFile1);

      reader.onload = () => {
        this.selectedFileDataUrl = reader.result as string
        // this.medicament.photo = reader.result as string; // Stockez les données d'image
      };
    }
  }


  // fileName = '';

  // onFileSelected(event) {
  //   const file:File = event.target.files[0]
  //   if (file) {
  //     this.fileName = file.name;

  //           const formData = new FormData();

  //           formData.append("thumbnail", file);

  //           const upload$ = this.http.post("/api/veterinaire/ajouter", formData);

  //           upload$.subscribe();
  //   }
  // }

}
