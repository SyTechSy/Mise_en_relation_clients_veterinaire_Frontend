import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteRacePage } from './ajouter-sante-race.page';

describe('AjouterSanteRacePage', () => {
  let component: AjouterSanteRacePage;
  let fixture: ComponentFixture<AjouterSanteRacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteRacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
