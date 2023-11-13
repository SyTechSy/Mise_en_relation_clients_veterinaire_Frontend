import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-veterinaire',
  templateUrl: './home-veterinaire.page.html',
  styleUrls: ['./home-veterinaire.page.scss'],
})
export class HomeVeterinairePage implements OnInit {

  constructor() { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {
    this.presentingElement = document.querySelector('.profil_verifier_container');
    this.presentingElement = document.querySelector('.ion-page');
  }

  
}
