import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-profil-veterinaire-vue-par-clients',
  templateUrl: './profil-veterinaire-vue-par-clients.page.html',
  styleUrls: ['./profil-veterinaire-vue-par-clients.page.scss'],
})
export class ProfilVeterinaireVueParClientsPage implements OnInit {
  veteconnect: Veterinaire | any;

  public veteriniareId: string | undefined
  // constructor() { }

  constructor(
    private veteService: VeterinaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    // this.text = '';
    // this.wordsCount = 0;
  }


  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
    ////////// detaille veterinaire par son id 
    this.veteriniareId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.veteriniareId);

    this.veteService.listVeterinaireID(+this.veteriniareId).subscribe((result) => {
      this.veteconnect = result;
    }, (error) => {
      console.log(error);
    })
  }

  text = '';
  wordsCount = 0;

  textareaMaxLengthValidation() {
    this.wordsCount = this.text.split(' ').length;
  }

  // Cette fonction est appelée lorsque la valeur du textarea change
  onTextareaChange() {
    this.wordsCount = this.text.split(' ').length;
  }

}
