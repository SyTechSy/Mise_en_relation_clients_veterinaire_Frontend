import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SanteService } from 'src/app/monService/sante.service';

@Component({
  selector: 'app-ajouter-suivi-animaux',
  templateUrl: './ajouter-suivi-animaux.page.html',
  styleUrls: ['./ajouter-suivi-animaux.page.scss'],
})
export class AjouterSuiviAnimauxPage implements OnInit {

  santeId : string = "";
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

  constructor(
    private santeService : SanteService,
    private router : Router,
    private http : HttpClient,
  ) { }

  
  
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

  onSubmit() {
    this.santeService.currentFile = this.selectedFile!;
    this.santeService.sante.nom = this.nom;
    this.santeService.sante.race = this.race;
    this.santeService.sante.prioriteSexe = this.prioriteSexe;
    this.santeService.sante.age = this.age;
    this.santeService.sante.photo = this.photo;
    this.santeService.sante.dateVaccin = this.dateVaccin;
    this.santeService.sante.nomVaccin = this.nomVaccin;
    this.santeService.sante.nomVeteVaccin = this.nomVeteVaccin;
    this.santeService.sante.dateTraitement = this.dateTraitement;
    this.santeService.sante.nomTraitement = this.nomTraitement;
    this.santeService.sante.nomVeteTraitement = this.nomVeteTraitement;
    this.santeService.sante.dateMaladie = this.dateMaladie;
    this.santeService.sante.nomMaladie = this.nomMaladie;
    this.santeService.sante.nomVeteMaladie = this.nomVeteMaladie;
    this.santeService.sante.poids = this.poids;
    this.santeService.sante.description = this.description;
    this.santeService.sante.utilisateur = JSON.parse(localStorage.getItem("utilisateur")!)
    this.santeService.ajouterSanteAnimal().subscribe((result) => {
      console.log(result);
      localStorage.setItem('santeAnimal', JSON.stringify(result));
      this.santeService.setAni(result)
      this.router.navigate( [`/suivi-sante`] ).then()
    })
    
  }

}
