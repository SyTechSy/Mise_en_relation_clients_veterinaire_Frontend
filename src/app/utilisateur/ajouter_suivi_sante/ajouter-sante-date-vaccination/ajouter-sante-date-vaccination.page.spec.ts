import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteDateVaccinationPage } from './ajouter-sante-date-vaccination.page';

describe('AjouterSanteDateVaccinationPage', () => {
  let component: AjouterSanteDateVaccinationPage;
  let fixture: ComponentFixture<AjouterSanteDateVaccinationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteDateVaccinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
