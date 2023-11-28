import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajouter-suivi-animaux',
  templateUrl: './ajouter-suivi-animaux.page.html',
  styleUrls: ['./ajouter-suivi-animaux.page.scss'],
})
export class AjouterSuiviAnimauxPage implements OnInit {

  constructor() { }

  
  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  
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

  ngOnInit() {
  }

}
