import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSanteNomPage } from './modifier-sante-nom.page';

describe('ModifierSanteNomPage', () => {
  let component: ModifierSanteNomPage;
  let fixture: ComponentFixture<ModifierSanteNomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSanteNomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
