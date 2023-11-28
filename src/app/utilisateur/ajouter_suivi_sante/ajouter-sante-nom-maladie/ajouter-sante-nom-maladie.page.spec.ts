import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomMaladiePage } from './ajouter-sante-nom-maladie.page';

describe('AjouterSanteNomMaladiePage', () => {
  let component: AjouterSanteNomMaladiePage;
  let fixture: ComponentFixture<AjouterSanteNomMaladiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomMaladiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
