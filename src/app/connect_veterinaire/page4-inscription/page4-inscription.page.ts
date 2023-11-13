import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4-inscription',
  templateUrl: './page4-inscription.page.html',
  styleUrls: ['./page4-inscription.page.scss'],
})
export class Page4InscriptionPage implements OnInit {

  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  constructor() { }

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
}
