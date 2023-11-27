import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteDateTraitementPage } from './ajouter-sante-date-traitement.page';

describe('AjouterSanteDateTraitementPage', () => {
  let component: AjouterSanteDateTraitementPage;
  let fixture: ComponentFixture<AjouterSanteDateTraitementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteDateTraitementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
