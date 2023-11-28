import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSuiviAnimauxPage } from './ajouter-suivi-animaux.page';

describe('AjouterSuiviAnimauxPage', () => {
  let component: AjouterSuiviAnimauxPage;
  let fixture: ComponentFixture<AjouterSuiviAnimauxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSuiviAnimauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
