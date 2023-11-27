import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomVeterinaireVaccinPage } from './ajouter-sante-nom-veterinaire-vaccin.page';

describe('AjouterSanteNomVeterinaireVaccinPage', () => {
  let component: AjouterSanteNomVeterinaireVaccinPage;
  let fixture: ComponentFixture<AjouterSanteNomVeterinaireVaccinPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomVeterinaireVaccinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
