import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { error } from 'console';
import { Medicament } from 'src/app/model/medicament';
import { MedicamentService } from 'src/app/monService/medicament.service';

@Component({
  selector: 'app-modification-medicament',
  templateUrl: './modification-medicament.page.html',
  styleUrls: ['./modification-medicament.page.scss'],
})
export class ModificationMedicamentPage implements OnInit {   

  
  public suiviMedicamentId: string | undefined  

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

  modifieMedi: Medicament | any;
  
  constructor(private mediService: MedicamentService, private router: Router, private activatedRoute: ActivatedRoute) { }
 
 
 
  ngOnInit() {
    this.modifieMedi = Object.assign(new Medicament(),JSON.parse(localStorage.getItem("suiviMedicament")!));
    /////////// modifier
    this.suiviMedicamentId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviMedicamentId);

    this.mediService.listMedicamentId(+this.suiviMedicamentId).subscribe((result) => {
      this.modifieMedi = result;
    }, (error) => {
      console.log(error);
    })
  }  

  chargerDonnee() {
    this.modifieMedi = Object.assign(new Medicament(),JSON.parse(localStorage.getItem("suiviMedicament")!));
    /////////// modifier
    this.suiviMedicamentId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.suiviMedicamentId);

    this.mediService.listMedicamentId(+this.suiviMedicamentId).subscribe((result) => {
      this.modifieMedi = result;
    }, (error) => {
      console.log(error);
    }
    );
  }



  onSubmit() {

    
    this.mediService.currentFile = this.selectedFile!;
    this.mediService.modifierMedicament(this.modifieMedi).subscribe((result) => {
      this.chargerDonnee();
      // console.log("modifiiii", result);
      // console.log(this.modifieMedi);
      // console.log("____________________________________________________________")
      // localStorage.setItem('medicament', JSON.stringify(result));
      // this.router.navigateByUrl('/suivi-medicament', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/suivi-medicament']);
      // }) 
    });

  }

  /*
onSubmit() {
    this.mediService.modifierMedicament(this.modifieMedi).subscribe((result) => {
      console.log("modif", result);
      this.router.navigateByUrl('/suivi-medicament', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/suivi-medicament']);
      });
    });
  }

  */


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




























    // let medi: Medicament = JSON.parse(localStorage.getItem("medicament")!);
    // console.log(medi)
    // medi.dateDebut = this.dateDebut;
    // medi.dateFin = this.dateFin;
    // medi.nomMedicament = this.nomMedicament;
    // medi.nomAnimal = this.nomAnimal;
    // medi.frequense = this.frequense;
    // medi.dosage = this.dosage;
    // medi.reveil = this.reveil;
    // medi.description = this.description;