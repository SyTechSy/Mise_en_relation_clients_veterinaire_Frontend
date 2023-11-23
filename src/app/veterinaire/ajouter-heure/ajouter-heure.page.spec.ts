import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterHeurePage } from './ajouter-heure.page';

describe('AjouterHeurePage', () => {
  let component: AjouterHeurePage;
  let fixture: ComponentFixture<AjouterHeurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterHeurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
