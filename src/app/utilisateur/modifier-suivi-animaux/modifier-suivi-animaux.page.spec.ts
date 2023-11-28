import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSuiviAnimauxPage } from './modifier-suivi-animaux.page';

describe('ModifierSuiviAnimauxPage', () => {
  let component: ModifierSuiviAnimauxPage;
  let fixture: ComponentFixture<ModifierSuiviAnimauxPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSuiviAnimauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
