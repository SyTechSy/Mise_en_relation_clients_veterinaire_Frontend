import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-profil-detaille',
  templateUrl: './profil-detaille.page.html',
  styleUrls: ['./profil-detaille.page.scss'],
})
export class ProfilDetaillePage implements OnInit {
  veteconnect: Veterinaire | any;

  constructor(
    private veteService: VeterinaireService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
  }

}
