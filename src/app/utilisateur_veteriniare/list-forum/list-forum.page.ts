import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-forum',
  templateUrl: './list-forum.page.html',
  styleUrls: ['./list-forum.page.scss'],
})
export class ListForumPage implements OnInit {

  constructor() { }

  canDismiss = false;

  // presentingElement = null;
  presentingElement: Element | null = null;


  ngOnInit() {
    this.presentingElement = document.querySelector('.profil_verifier_container');
    this.presentingElement = document.querySelector('.ion-page');
  }


}
