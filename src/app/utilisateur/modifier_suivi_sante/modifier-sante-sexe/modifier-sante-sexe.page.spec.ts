import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSanteSexePage } from './modifier-sante-sexe.page';

describe('ModifierSanteSexePage', () => {
  let component: ModifierSanteSexePage;
  let fixture: ComponentFixture<ModifierSanteSexePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSanteSexePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
