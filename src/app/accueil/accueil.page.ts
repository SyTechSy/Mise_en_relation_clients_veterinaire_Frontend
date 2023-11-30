import { Component, OnInit } from '@angular/core';
import { VetcareLiaisonService } from '../monService/vetcare-liaison.service';
import { Router } from '@angular/router';
import { Utilisateur } from '../model/utilisateur';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  userconnect: Utilisateur | any;
  
  constructor(
      private userService: VetcareLiaisonService, 
      private router: Router
    ) { 
   // this.userconnect = userService.getUser();
  }

  ngOnInit() {
    this.userconnect = Object.assign(new Utilisateur(),JSON.parse(localStorage.getItem("utilisateur")!));
  }

  greetingMessage: string = '';

  ionViewDidEnter() {
    this.setGreetingMessage();
  }

  setGreetingMessage() {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 15) {
      this.greetingMessage = 'Bonjour';
    } else {
      this.greetingMessage = 'Bonsoir';
    }
  }

}
