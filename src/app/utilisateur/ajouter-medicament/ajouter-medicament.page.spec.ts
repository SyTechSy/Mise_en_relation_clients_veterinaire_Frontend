import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterMedicamentPage } from './ajouter-medicament.page';

describe('AjouterMedicamentPage', () => {
  let component: AjouterMedicamentPage;
  let fixture: ComponentFixture<AjouterMedicamentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterMedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
