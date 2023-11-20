import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MedicamentService } from 'src/app/monService/medicament.service';

@Component({
  selector: 'app-ajouter-rappel',
  templateUrl: './ajouter-rappel.page.html',
  styleUrls: ['./ajouter-rappel.page.scss'],
})
export class AjouterRappelPage implements OnInit {
  dateDebut:string="";
  dateFin:string="";
  nomMedicament:string="";
  nomAnimal:string="";  
  frequense:string="";
  dosage:string="";
  reveil:string="";
  quartier:string="";
  description:string="";


  constructor(private medicamentService : MedicamentService,  private router: Router) { }

  ngOnInit() {
  }

  

 
  onSubmit() {

    this.medicamentService.medicament.reveil = this.reveil;
    console.log(this.medicamentService.medicament);
    this.medicamentService.ajouterMedicaments().subscribe((result) => {
      console.log(result);
      // const suiviMedicamentId = result.suiviMedicamentId;
      localStorage.setItem('medicament', JSON.stringify(result));
      this.medicamentService.setMedi(result)
      this.router.navigate(['/suivi-medicament'])
    }
    )
  }


}
