import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterAnimalPage } from './ajouter-animal.page';

describe('AjouterAnimalPage', () => {
  let component: AjouterAnimalPage;
  let fixture: ComponentFixture<AjouterAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
