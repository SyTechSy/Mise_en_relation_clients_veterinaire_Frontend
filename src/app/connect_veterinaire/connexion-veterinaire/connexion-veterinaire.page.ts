import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connexion-veterinaire',
  templateUrl: './connexion-veterinaire.page.html',
  styleUrls: ['./connexion-veterinaire.page.scss'],
})
export class ConnexionVeterinairePage implements OnInit {

  
  passwordType : string  = 'password';
  passwordShown : boolean  = false;
  /*password!:string;
  email!:string;*/
  formData: any = {};
  // admininfo=[
  //   {email:'amadouit223@gmail.com', password:'1234567890'},
  //     {email:'cptbarbossa23@gmail.com', password:'1234567890'},
  // ];


  constructor() { }

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

}
