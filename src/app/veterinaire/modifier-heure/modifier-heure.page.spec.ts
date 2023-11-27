import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierHeurePage } from './modifier-heure.page';

describe('ModifierHeurePage', () => {
  let component: ModifierHeurePage;
  let fixture: ComponentFixture<ModifierHeurePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierHeurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
