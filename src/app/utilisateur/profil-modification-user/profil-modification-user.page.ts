import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-profil-modification-user',
  templateUrl: './profil-modification-user.page.html',
  styleUrls: ['./profil-modification-user.page.scss'],
})
export class ProfilModificationUserPage implements OnInit {
  
  
  nom:string="";
  prenom:string="";
  email:string="";
  motDePasse:string="";  
  numero:string="";
  genre:string="";
  dateNaissance:string="";
  quartier:string="";
  description:string=""
  photo:string=""

  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  userconnect: Utilisateur | any;
  
  constructor(private userService: VetcareLiaisonService, private router: Router) { }

  ngOnInit() {
    this.userconnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
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

  ////////////////////////////////// MODIFICATION 

  onSubmit() {
    this.userService.currentFile = this.selectedFile!;
    let user : Utilisateur = JSON.parse(localStorage.getItem("utilisateur")!);
    user.nom = this.nom
    user.prenom = this.prenom
    user.email = this.email
    user.motDePasse = this.motDePasse
    user.numero = this.numero
    user.genre = this.genre
    user.dateNaissance = this.dateNaissance
    user.quartier = this.quartier
    user.description = this.description
    user.photo = this.photo
    this.userService.modifierUtilisateur(this.userconnect).subscribe((result) => {
      console.log("modif",result);
      localStorage.setItem('utilisateur', JSON.stringify(result));
      this.router.navigate(['/tabs/profil-user'])
    }
    )
  }

}
