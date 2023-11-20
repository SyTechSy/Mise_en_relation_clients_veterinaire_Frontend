import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from 'src/app/monService/medicament.service';
// import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-ajouter-medicament',
  templateUrl: './ajouter-medicament.page.html',
  styleUrls: ['./ajouter-medicament.page.scss'],
})
export class AjouterMedicamentPage implements OnInit {

  
  dateDebut:string="";
  dateFin:string="";
  nomMedicament:string="";
  nomAnimal:string="";  
  frequense:string="";
  dosage:string="";
  reveil:string="";
  description:string="";


  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  constructor(private mediService : MedicamentService,  private router: Router) { }

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

    onSubmit() {

      this.mediService.medicament.dateDebut = this.dateDebut;
      this.mediService.medicament.dateFin = this.dateFin;
      this.mediService.medicament.nomMedicament = this.nomMedicament;
      this.mediService.medicament.nomAnimal = this.nomAnimal;
      this.mediService.medicament.frequense = this.frequense;
      this.mediService.medicament.dosage = this.dosage;
      this.mediService.medicament.description = this.description;
      this.router.navigate( [`/ajouter-rappel`] ).then()
      
    }


}
