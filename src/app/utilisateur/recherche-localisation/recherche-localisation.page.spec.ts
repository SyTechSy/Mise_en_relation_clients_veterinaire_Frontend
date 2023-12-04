import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RechercheLocalisationPage } from './recherche-localisation.page';

describe('RechercheLocalisationPage', () => {
  let component: RechercheLocalisationPage;
  let fixture: ComponentFixture<RechercheLocalisationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RechercheLocalisationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
