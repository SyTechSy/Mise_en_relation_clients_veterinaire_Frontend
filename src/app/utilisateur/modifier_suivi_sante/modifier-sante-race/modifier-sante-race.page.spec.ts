import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSanteRacePage } from './modifier-sante-race.page';

describe('ModifierSanteRacePage', () => {
  let component: ModifierSanteRacePage;
  let fixture: ComponentFixture<ModifierSanteRacePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSanteRacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
