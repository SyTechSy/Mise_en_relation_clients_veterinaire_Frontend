import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteDateMaladiePage } from './ajouter-sante-date-maladie.page';

describe('AjouterSanteDateMaladiePage', () => {
  let component: AjouterSanteDateMaladiePage;
  let fixture: ComponentFixture<AjouterSanteDateMaladiePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteDateMaladiePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
