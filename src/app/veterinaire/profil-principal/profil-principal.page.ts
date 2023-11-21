import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Veterinaire } from 'src/app/model/veterinaire';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-profil-principal',
  templateUrl: './profil-principal.page.html',
  styleUrls: ['./profil-principal.page.scss'],
})
export class ProfilPrincipalPage implements OnInit {
  veteconnect: Veterinaire | any;

  constructor(
    private veteService: VeterinaireService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(),JSON.parse(localStorage.getItem("veterinaire")!));
  }

      // Méthode pour déconnecter l'utilisateur
      deconnecterVeterinaire() {
        localStorage.removeItem('veterinaire');
        this.router.navigate(['/connexion-veterinaire']).then();
      }
  

}
