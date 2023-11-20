import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Utilisateur } from 'src/app/model/utilisateur';
import { VetcareLiaisonService } from 'src/app/monService/vetcare-liaison.service';

@Component({
  selector: 'app-profil-user',
  templateUrl: './profil-user.page.html',
  styleUrls: ['./profil-user.page.scss'],
})
export class ProfilUserPage implements OnInit {
  userconnect: Utilisateur | any;
  
  constructor(private userService: VetcareLiaisonService, private router: Router) { 
   // this.userconnect = userService.getUser();
  }

  ngOnInit() {
    this.userconnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
  }


    // Méthode pour déconnecter l'utilisateur
    deconnecterUtilisateur() {
      localStorage.removeItem('utilisateur');
      this.router.navigate(['/connexion-utilisateur']).then();
    }




}
