import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiviAnimalPage } from './suivi-animal.page';

describe('SuiviAnimalPage', () => {
  let component: SuiviAnimalPage;
  let fixture: ComponentFixture<SuiviAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuiviAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
