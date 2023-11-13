import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-veterinaire-vue-par-clients',
  templateUrl: './home-veterinaire-vue-par-clients.page.html',
  styleUrls: ['./home-veterinaire-vue-par-clients.page.scss'],
})
export class HomeVeterinaireVueParClientsPage implements OnInit {

  constructor() { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {
    this.presentingElement = document.querySelector('.profil_verifier_container');
    this.presentingElement = document.querySelector('.ion-page');
  }

}
