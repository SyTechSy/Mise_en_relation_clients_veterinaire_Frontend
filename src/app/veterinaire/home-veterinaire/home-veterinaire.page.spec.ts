import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeVeterinairePage } from './home-veterinaire.page';

describe('HomeVeterinairePage', () => {
  let component: HomeVeterinairePage;
  let fixture: ComponentFixture<HomeVeterinairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeVeterinairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
