// import { Component, OnInit } from '@angular/core';
// import { ActionSheetController, Platform, AlertController } from '@ionic/angular';

// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsMapTypeId,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker,
//   Environment
// } from '@ionic-native/google-maps';

// @Component({
//   selector: 'app-recherche-localisation',
//   templateUrl: './recherche-localisation.page.html',
//   styleUrls: ['./recherche-localisation.page.scss'],
// })
// export class RechercheLocalisationPage implements OnInit {

//   map : GoogleMap | undefined;

//   constructor(
//     public alertController: AlertController,
//     public actionCtrl: ActionSheetController,
//     private platform: Platform
//   ) {
//     if (this.platform.is('cordova')) {
//       this.loadMap();
//     }
//   }

//   loadMap() {
//     Environment.setEnv({
//       API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyAyH4OGxmaCSx33Rme4g56-mohtVFeo1mo',
//       API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyAyH4OGxmaCSx33Rme4g56-mohtVFeo1mo'
//     });
//     this.map = GoogleMaps.create('map_canvas', {
//       camera: {
//         target: {
//           lat: 43.610769,
//           lng: 3.876716
//         },
//         zoom: 12,
//         tilt: 30
//       }
//     });
//   }

//   ngOnInit() {
//   }

  

// }
