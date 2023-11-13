import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeVeterinairePlanningModificationPage } from './home-veterinaire-planning-modification.page';

describe('HomeVeterinairePlanningModificationPage', () => {
  let component: HomeVeterinairePlanningModificationPage;
  let fixture: ComponentFixture<HomeVeterinairePlanningModificationPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeVeterinairePlanningModificationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
