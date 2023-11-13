import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-veterinaire-vue-par-clients',
  templateUrl: './profil-veterinaire-vue-par-clients.page.html',
  styleUrls: ['./profil-veterinaire-vue-par-clients.page.scss'],
})
export class ProfilVeterinaireVueParClientsPage implements OnInit {
  // constructor() { }

  ngOnInit() {
  }

  text = '';
  wordsCount = 0;

  constructor() {
    this.text = '';
    this.wordsCount = 0;
  }

  textareaMaxLengthValidation() {
    this.wordsCount = this.text.split(' ').length;
  }

  // Cette fonction est appelée lorsque la valeur du textarea change
  onTextareaChange() {
    this.wordsCount = this.text.split(' ').length;
  }

}
