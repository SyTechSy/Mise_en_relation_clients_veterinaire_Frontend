import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierAnimalPage } from './modifier-animal.page';

describe('ModifierAnimalPage', () => {
  let component: ModifierAnimalPage;
  let fixture: ComponentFixture<ModifierAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
