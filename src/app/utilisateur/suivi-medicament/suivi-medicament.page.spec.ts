import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiviMedicamentPage } from './suivi-medicament.page';

describe('SuiviMedicamentPage', () => {
  let component: SuiviMedicamentPage;
  let fixture: ComponentFixture<SuiviMedicamentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuiviMedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
