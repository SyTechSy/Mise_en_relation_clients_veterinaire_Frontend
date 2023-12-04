import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rdv } from 'src/app/model/rdv';
import { Veterinaire } from 'src/app/model/veterinaire';
import { RdvService } from 'src/app/monService/rdv.service';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-detaille-rdv',
  templateUrl: './detaille-rdv.page.html',
  styleUrls: ['./detaille-rdv.page.scss'],
})
export class DetailleRdvPage implements OnInit {

  rdvconnect : Rdv | any;

  veteconnect : Veterinaire | any;

  public veteriniareId : string | undefined;

  public rdvId : string | undefined;

  constructor(
    private rdvService : RdvService,
    private veterinaireService : VeterinaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.veteconnect = Object.assign(new Veterinaire(), JSON.parse(localStorage.getItem("veteriniare")!));
    this.rdvconnect = Object.assign(new Rdv(), JSON.parse(localStorage.getItem("utilisateur")!));
    this.rdvId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.rdvId);

    this.rdvService.listRdvID(+this.rdvId).subscribe((result) => {
      this.rdvconnect = result
    }, (error) => {
      console.log(error);
    })

    this.veteriniareId = this.activatedRoute.snapshot.paramMap.get('id')!;
    console.log(this.veteriniareId);

    this.veterinaireService.listVeterinaireID(+this.veteriniareId).subscribe((result) => {
      this.veteconnect = result
    }, (error) => {
      console.log(error);
    })
  }
  

}
