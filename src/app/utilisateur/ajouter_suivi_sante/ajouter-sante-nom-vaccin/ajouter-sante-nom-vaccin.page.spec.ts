import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomVaccinPage } from './ajouter-sante-nom-vaccin.page';

describe('AjouterSanteNomVaccinPage', () => {
  let component: AjouterSanteNomVaccinPage;
  let fixture: ComponentFixture<AjouterSanteNomVaccinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomVaccinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
