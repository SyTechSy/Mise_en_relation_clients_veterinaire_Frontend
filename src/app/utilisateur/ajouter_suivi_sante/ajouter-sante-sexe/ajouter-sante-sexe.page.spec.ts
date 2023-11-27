import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteSexePage } from './ajouter-sante-sexe.page';

describe('AjouterSanteSexePage', () => {
  let component: AjouterSanteSexePage;
  let fixture: ComponentFixture<AjouterSanteSexePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteSexePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
