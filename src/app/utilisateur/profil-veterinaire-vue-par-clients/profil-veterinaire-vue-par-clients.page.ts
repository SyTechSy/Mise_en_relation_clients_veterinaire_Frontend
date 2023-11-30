import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Veterinaire } from 'src/app/model/veterinaire';
import { CommentaireService } from 'src/app/monService/commentaire.service';
import { VeterinaireService } from 'src/app/monService/veterinaire.service';

@Component({
  selector: 'app-profil-veterinaire-vue-par-clients',
  templateUrl: './profil-veterinaire-vue-par-clients.page.html',
  styleUrls: ['./profil-veterinaire-vue-par-clients.page.scss'],
})
export class ProfilVeterinaireVueParClientsPage implements OnInit {
  veteconnect: Veterinaire | any;

  public veteriniareId: string | undefined;


  // commentaireId : number | undefined;
  content : string = "";

  // constructor() { }

  constructor(
    private veteService: VeterinaireService,
    private commentaireService: CommentaireService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http : HttpClient,
    private alertController: AlertController
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


  ////////////////////// ajouter commentaire

  onSubmitCommentaire() {
    this.commentaireService.commentaire.content = this.content;
    this.commentaireService.commentaire.utilisateur = JSON.parse(localStorage.getItem("utilisateur")!)
    this.commentaireService.ajouterCommentaire().subscribe(async (result) => {
      console.log(result);
      console.log(this.commentaireService);
      this.content = '';

      // Afficher la boîte de dialogue de succès
      const alert = await this.alertController.create({
        header: 'Succès',
        message: 'Votre commentaire a été envoyé avec succès.',
        buttons: ['OK']
      });

      await alert.present();

      this.router.navigate( ['/home-veterinaire-vue-par-clients/'+this.veteriniareId] ).then()



    })
  }

}
