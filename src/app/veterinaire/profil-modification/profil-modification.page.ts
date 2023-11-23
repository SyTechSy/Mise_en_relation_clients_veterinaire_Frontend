import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-profil-modification',
  templateUrl: './profil-modification.page.html',
  styleUrls: ['./profil-modification.page.scss'],
})
export class ProfilModificationPage implements OnInit {

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
  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  veteconnect : Veterinaire | any;

  constructor(
    private veteService: VeterinaireService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veterinaire")!));
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

  onSubmit() {
    this.veteService.currentFile = this.selectedFile!;
    // this.veteService.currentFile = this.selectedFile!;
    let vete : Veterinaire = JSON.parse(localStorage.getItem("veterinaire")!);
    vete.nom = this.nom
    vete.prenom = this.prenom
    vete.email = this.email
    vete.numero = this.numero
    vete.genre = this.genre
    vete.langueParler = this.langueParler
    vete.pays = this.pays
    vete.quartier = this.quartier
    vete.rue = this.rue
    vete.codePostal = this.codePostal
    vete.diplomeOuCertificat = this.diplomeOuCertificat
    vete.domaineSpecialisation = this.domaineSpecialisation
    vete.jours = this.jours  
    vete.mois = this.mois
    vete.annee = this.annee
    vete.anneeExperience = this.anneeExperience
    // vete.imageCV = this.imageCV
    vete.imagePRO = this.imagePRO
    vete.motDePasse = this.motDePasse
    this.veteService.modifierVeterinaire(this.veteconnect).subscribe((result) => {
      console.log("modification veterinaire", result);
      localStorage.setItem('veterinaire', JSON.stringify(result));
      this.router.navigate(['/profil-detaille'])
    })
  }

  
  // veteconnect1 = {
  //   jours: '',
  //   mois: '',
  //   annee: ''
  // };

  // // Propriété calculée pour regrouper les valeurs
  // get dateNaissance(): string {
  //   return `${this.veteconnect1.jours}/${this.veteconnect1.mois}/${this.veteconnect1.annee}`;
  // }

}
