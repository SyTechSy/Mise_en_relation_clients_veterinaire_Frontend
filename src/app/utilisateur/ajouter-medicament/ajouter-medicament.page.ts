import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medicament } from 'src/app/model/medicament';
import { Veterinaire } from 'src/app/model/veterinaire';
import { MedicamentService } from 'src/app/monService/medicament.service';
// import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.page.html',
  styleUrls: ['./ajouter-medicament.page.scss'],
})
export class AjouterMedicamentPage implements OnInit {

  
  // public meditof : Medicament = {} as Medicament;

  
  dateDebut:string="";
  dateFin:string="";
  nomMedicament:string="";
  nomAnimal:string="";  
  frequense:string="";
  dosage:string="";
  reveil:string="";
  description:string="";
  photo:string="";


  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  constructor(private mediService : MedicamentService,  private router: Router, private http: HttpClient) { }

  ngOnInit() {
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

  // ajouterMedicamentAvecImage() {
  //   if (this.meditof && this.meditof.photo) {
  //     // Appelez le service pour ajouter le médicament avec image
  //     this.mediService.ajouterMedicamentAvecImage(this.meditof).subscribe(
  //       (response) => {
  //         // Traitez la réponse du serveur, qui peut inclure des informations sur le médicament ajouté
  //         console.log('Réponse du serveur :', response);
  //       },
  //       (error) => {
  //         console.error('Erreur lors de l\'ajout du médicament :', error);
  //       }
  //     );
  //   } else {
  //     console.error('Veuillez sélectionner un fichier image.');
  //   }
  // }
  

  onSubmit() {
    this.mediService.currentFile = this.selectedFile!;
    this.mediService.medicament.photo = this.photo;
    this.mediService.medicament.dateDebut = this.dateDebut;
    this.mediService.medicament.dateFin = this.dateFin;
    this.mediService.medicament.nomMedicament = this.nomMedicament;
    this.mediService.medicament.nomAnimal = this.nomAnimal;
    this.mediService.medicament.frequense = this.frequense;
    this.mediService.medicament.dosage = this.dosage;
    this.mediService.medicament.description = this.description;
    this.router.navigate( [`/ajouter-rappel`] ).then()
    
  }

  // handleFileInput(event) {
  //   const file:File = event.target.files[0];

  //   if (file) {
  //     this.fileName = file.name;

  //           const formData = new FormData();
  //           formData.append("image", file);

  //           const upload$ = this.http.post("api/suiviMedicament")
  //   }

  // }


}
