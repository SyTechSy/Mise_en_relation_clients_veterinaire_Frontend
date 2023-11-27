import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomVeterinaireTraitementPage } from './ajouter-sante-nom-veterinaire-traitement.page';

describe('AjouterSanteNomVeterinaireTraitementPage', () => {
  let component: AjouterSanteNomVeterinaireTraitementPage;
  let fixture: ComponentFixture<AjouterSanteNomVeterinaireTraitementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomVeterinaireTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
