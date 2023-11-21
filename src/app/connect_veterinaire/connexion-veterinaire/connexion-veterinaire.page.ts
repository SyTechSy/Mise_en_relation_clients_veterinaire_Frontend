import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-connexion-veterinaire',
  templateUrl: './connexion-veterinaire.page.html',
  styleUrls: ['./connexion-veterinaire.page.scss'],
})
export class ConnexionVeterinairePage implements OnInit {

  email:string="";
  motDePasse:string="";
  
  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  /*password!:string;
  email!:string;*/
  formData: any = {};
  // admininfo=[
  //   {email:'amadouit223@gmail.com', password:'1234567890'},
  //     {email:'cptbarbossa23@gmail.com', password:'1234567890'},
  // ];

  constructor(
    private veteService : VeterinaireService,
    private router : Router
  ) { }

  ngOnInit() {
  }

  // pour le password pour
  public togglePassword() {
    this.passwordShown = !this.passwordShown;
    this.passwordType = this.passwordShown ? 'text' : 'password';

    if (this.passwordShown) {
      this.passwordType = 'text';
    } else {
      this.passwordType = 'password';
    }
  }

   
  onSubmit() {
    this.veteService.connexionVeterinaire(this.email, this.motDePasse).subscribe(
      (result:any) => {
        console.log(result);
        const veteriniareId= result.veteriniareId; 
        localStorage.setItem('veterinaire', JSON.stringify(result));
        this.veteService.setVetes(result);
        // Redirection vers une autre page après la connexion réussie
        this.router.navigate(['/tabs-v/home-veterinaire']).then();
        
    }
    )
  }







}
