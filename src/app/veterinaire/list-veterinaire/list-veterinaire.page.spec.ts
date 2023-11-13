import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListVeterinairePage } from './list-veterinaire.page';

describe('ListVeterinairePage', () => {
  let component: ListVeterinairePage;
  let fixture: ComponentFixture<ListVeterinairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListVeterinairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
