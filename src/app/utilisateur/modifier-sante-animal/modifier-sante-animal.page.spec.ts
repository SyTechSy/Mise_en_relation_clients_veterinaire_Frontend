import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierSanteAnimalPage } from './modifier-sante-animal.page';

describe('ModifierSanteAnimalPage', () => {
  let component: ModifierSanteAnimalPage;
  let fixture: ComponentFixture<ModifierSanteAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierSanteAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
