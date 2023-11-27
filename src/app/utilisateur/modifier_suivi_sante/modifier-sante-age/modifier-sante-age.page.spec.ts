import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSanteAgePage } from './modifier-sante-age.page';

describe('ModifierSanteAgePage', () => {
  let component: ModifierSanteAgePage;
  let fixture: ComponentFixture<ModifierSanteAgePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSanteAgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
