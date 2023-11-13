import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnexionUtilisateurPage } from './connexion-utilisateur.page';

describe('ConnexionUtilisateurPage', () => {
  let component: ConnexionUtilisateurPage;
  let fixture: ComponentFixture<ConnexionUtilisateurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConnexionUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
