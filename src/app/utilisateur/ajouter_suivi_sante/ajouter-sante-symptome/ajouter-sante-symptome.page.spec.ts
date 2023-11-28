import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteSymptomePage } from './ajouter-sante-symptome.page';

describe('AjouterSanteSymptomePage', () => {
  let component: AjouterSanteSymptomePage;
  let fixture: ComponentFixture<AjouterSanteSymptomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteSymptomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
