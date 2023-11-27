import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomTraitementPage } from './ajouter-sante-nom-traitement.page';

describe('AjouterSanteNomTraitementPage', () => {
  let component: AjouterSanteNomTraitementPage;
  let fixture: ComponentFixture<AjouterSanteNomTraitementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
