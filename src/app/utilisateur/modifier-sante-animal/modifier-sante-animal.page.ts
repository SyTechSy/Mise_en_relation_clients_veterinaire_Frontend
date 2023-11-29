import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Sante } from 'src/app/model/sante';
import { SanteService } from 'src/app/monService/sante.service';

@Component({
  selector: 'app-modifier-sante-animal',
  templateUrl: './modifier-sante-animal.page.html',
  styleUrls: ['./modifier-sante-animal.page.scss'],
})
export class ModifierSanteAnimalPage implements OnInit {

  nom : string = "";
  race : string = "";
  prioriteSexe : string = "";
  age : string = "";
  photo : string = "";
  dateVaccin : string = "";
  nomVaccin : string = "";
  nomVeteVaccin : string = "";
  dateTraitement : string = "";
  nomTraitement : string = "";
  nomVeteTraitement : string = "";
  dateMaladie : string = "";
  nomMaladie : string = "";
  nomVeteMaladie : string = "";
  poids : string = "";
  description : string = "";
  // utilisateur : string = "";

  santeconnect : Sante | any;

  public santeId : string | undefined ;

  constructor(
    private santeService : SanteService,
    private router : Router,
    private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit() {
    this.santeconnect = Object.assign(new Sante(), JSON.parse(localStorage.getItem("santeAnimal")!));
    this.santeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.santeId);

    this.santeService.listSanteAnimalID(+this.santeId).subscribe((result) => {
      this.santeconnect = result
    }, (error) => {
      console.log(error);
    })
  }


  onSubmit() {
    this.santeService.currentFile = this.selectedFile!;
    this.santeService.modifierSanteAnimal(this.santeconnect).subscribe((result) => {
      this.chargerDonnee();
      this.router.navigate(['/detail-animal-sante/'+this.santeId]);
    })
  
  }
  
  chargerDonnee() {
    this.santeconnect = Object.assign(new Sante(), JSON.parse(localStorage.getItem("santeAnimal")!));
    this.santeId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.santeId);

    this.santeService.listSanteAnimalID(+this.santeId).subscribe((result) => {
      this.santeconnect = result
    }, (error) => {
      console.log(error);
    })
  }
  
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





}
