import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { error } from 'console';
import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-connexion-utilisateur',
  templateUrl: './connexion-utilisateur.page.html',
  styleUrls: ['./connexion-utilisateur.page.scss'],
})
export class ConnexionUtilisateurPage implements OnInit {

  
  email:string="";
  motDePasse:string="";



  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  /*password!:string;
  email!:string;*/
  formData: any = {};

  user!:string;
  // admininfo=[
  //   {email:'amadouit223@gmail.com', password:'1234567890'},
  //     {email:'cptbarbossa23@gmail.com', password:'1234567890'},
  // ];


  constructor(private userService : VetcareLiaisonService, private router: Router) { }

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

    /*
      public createSubmit() {
    this.medicamentService.createMedicament(this.medicament).subscribe( (data) => {
      this.router.navigate( ['/'] ).then();
    }, (error) => {
      this.errorMessage = error;
      this.router.navigate( [`/medicaments/add`] ).then();
    });
  }

    */
    
    onSubmit() {
      this.userService.connexionUtilisateur(this.email, this.motDePasse).subscribe(
        (result:any) => {
          console.log(result);
          const utilisateurId= result.utilisateurId; 
          localStorage.setItem('utilisateur', JSON.stringify(result));
          this.userService.setUsers(result);
          // Redirection vers une autre page après la connexion réussie
          this.router.navigate(['/']).then();
          
      }
      )
    }

    // onSubmit() {
    //   this.userService.connexionUtilisateur(this.email, this.motDePasse).subscribe(
    //     (result:any) => {
    //       console.log(result);
    //       this.router.navigate(['/']).then();
    //     }
    //   )
    // }
  
}
