import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { error } from 'console';
import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-inscription-utilisateur2',
  templateUrl: './inscription-utilisateur2.page.html',
  styleUrls: ['./inscription-utilisateur2.page.scss'],
})
export class InscriptionUtilisateur2Page implements OnInit {

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

  constructor(private userService : VetcareLiaisonService, private router: Router) { }

  ngOnInit() {
  }

  
    onSubmit() {  
      this.userService.currentFile = this.selectedFile!;
      this.userService.utilisateur.photo = this.photo;
      this.userService.utilisateur.numero = this.numero;
      this.userService.utilisateur.genre = this.genre;
      this.userService.utilisateur.dateNaissance = this.dateNaissance;
      this.userService.utilisateur.quartier = this.quartier;
      this.userService.utilisateur.description = this.description;
      console.log(this.userService.utilisateur);
      this.userService.inscriptionUtilisateur().subscribe((result) => {
        console.log(result);
        this.router.navigate(['/connexion-utilisateur']).then()
      }
      )
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

      // this.router.navigate( [`/connexion-utilisateur`] ).then()
    //   this.userService.inscriptionUtilisateur().subscribe((result)=>{
    //     console.log(result);
    //     this.router.navigate(['/']).then();
    //   }, (error) => {
    //     this.router.navigate(['/connexion-utilisateur']).then()
    //   }
    //   )
    // }
}
