import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/monService/animal.service';

@Component({
  selector: 'app-ajouter-animal',
  templateUrl: './ajouter-animal.page.html',
  styleUrls: ['./ajouter-animal.page.scss'],
})
export class AjouterAnimalPage implements OnInit {

  nom: string="";
  age: string="";
  // sexe: string="";
  categorie: string="";  
  photo: string="";
  priorite: string="";
  description: string="";
  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  constructor(
    private animauxService: AnimalService,
    private router: Router, 
    private http: HttpClient
  ) { }

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
    this.animauxService.currentFile = this.selectedFile!;
    this.animauxService.animal.photo = this.photo;
    this.animauxService.animal.nom = this.nom;
    this.animauxService.animal.age = this.age;
    // this.animauxService.animal.sexe = this.sexe;
    this.animauxService.animal.categorie = this.categorie;
    this.animauxService.animal.priorite = this.priorite;
    this.animauxService.animal.description = this.description;
    this.animauxService.ajouterAnimal().subscribe((result) => {
      console.log(result);
      localStorage.setItem('suiviAnimal', JSON.stringify(result));
      this.animauxService.setAni(result)
      this.router.navigate( [`/suivi-animal`] ).then()
    })  
    
  }


}
