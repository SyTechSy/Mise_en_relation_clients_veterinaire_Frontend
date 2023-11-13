import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionUtilisateurPage } from './inscription-utilisateur.page';

describe('InscriptionUtilisateurPage', () => {
  let component: InscriptionUtilisateurPage;
  let fixture: ComponentFixture<InscriptionUtilisateurPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscriptionUtilisateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
