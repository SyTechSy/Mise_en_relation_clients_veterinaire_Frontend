import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
// import { error } from 'console';
import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-inscription-utilisateur',
  templateUrl: './inscription-utilisateur.page.html',
  styleUrls: ['./inscription-utilisateur.page.scss'],
})
export class InscriptionUtilisateurPage implements OnInit {

  nom:string="";
  prenom:string="";
  email:string="";
  motDePasse:string="";  
  numero:string="";
  genre:string="";
  dateNaissance:string="";
  quartier:string="";
  description:string="";
  // confirmMotDePasse:string="";

  constructor(private userService : VetcareLiaisonService,  private router: Router) { }

  ngOnInit() {
  }


  onSubmit() {

    this.userService.utilisateur.nom = this.nom;
    this.userService.utilisateur.prenom = this.prenom;
    this.userService.utilisateur.email = this.email;
    this.userService.utilisateur.motDePasse = this.motDePasse;
    this.router.navigate( [`/inscription-utilisateur2`] ).then()

  }


  
  /*onSubmit(){
    this.submitted = true;

    if (this.formLogin.invalid) {
      return;
    }
    
    this.adminService.connectAdmin(this.formLogin.value["email"]!,this.formLogin.value["password"]!).subscribe((result : any) => {
      //this.adminService.currentAdmin = Object.assign(new Admin(),result["data"]);
      //sessionStorage.setItem("currentAdmin",JSON.stringify(result["data"]));
      encryptStorage.setItem('currentAdmin', result["data"] );
      console.log(encryptStorage.getItem('currentAdmin'));
      this.route.navigate(['accueil']);
    },((error) => {
      console.log(error.error.message);
      if(error.error.message == "pass invalid"){
        this.formLogin.controls["password"].setErrors({'incorrect' : true});
      }
      if(error.error.message == "email invalid"){
        this.formLogin.controls["email"].setErrors({'incorrect' : true});
      }
    }));*/
              
      // this.userService.inscriptionUtilisateur(this.nom, this.prenom, this.email, this.motDePasse, this.numero, this.genre, this.dateNaissance, this.quartier, this.description).subscribe(
      //   (result) => {
      //     console.log(result);
      //     this.router.navigate(['/']).then();
      // }, (error) => {
      //   this.router.navigate( [`/inscription-utilisateur2`] ).then()
      // }
      // )

  }
  
  