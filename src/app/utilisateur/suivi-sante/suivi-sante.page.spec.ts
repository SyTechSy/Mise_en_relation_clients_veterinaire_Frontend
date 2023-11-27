import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuiviSantePage } from './suivi-sante.page';

describe('SuiviSantePage', () => {
  let component: SuiviSantePage;
  let fixture: ComponentFixture<SuiviSantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SuiviSantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
