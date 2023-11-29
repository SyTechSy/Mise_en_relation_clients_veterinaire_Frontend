import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Animal } from 'src/app/model/animal';
import { AnimalService } from 'src/app/monService/animal.service';

@Component({
  selector: 'app-modifier-animal',
  templateUrl: './modifier-animal.page.html',
  styleUrls: ['./modifier-animal.page.scss'],
})
export class ModifierAnimalPage implements OnInit {

  nom : string ="";
  age : string ="";
  categorie : string ="";
  photo : string ="";
  priorite : string ="";
  description : string ="";
  
  // La creation de l'image 
  selectedFile: File | null = null;
  selectedFileDataUrl: string | null = null;

  
  modifieAnimal : Animal | any;

  public suiviSanterId: string | undefined;

  constructor(
    private animauxService: AnimalService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.modifieAnimal = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.suiviSanterId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviSanterId);

    this.animauxService.listAnimalID(+this.suiviSanterId).subscribe((result) => {
      this.modifieAnimal = result
    }, (error) => {
      console.log(error);
    })
  }

  chargerDonnee(){
    this.modifieAnimal = Object.assign(new Animal(), JSON.parse(localStorage.getItem("suiviSante")!));
    this.suiviSanterId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviSanterId);

    this.animauxService.listAnimalID(+this.suiviSanterId).subscribe((result) => {
      this.modifieAnimal = result
    }, (error) => {
      console.log(error);
    })
  }
  
  onSubmit() {
    this.animauxService.currentFile = this.selectedFile!;
    this.animauxService.modifierAnimal(this.modifieAnimal).subscribe((result) => {
      this.chargerDonnee();
      this.router.navigate(['/detail-suivi-animal/'+this.suiviSanterId]);
    })
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
