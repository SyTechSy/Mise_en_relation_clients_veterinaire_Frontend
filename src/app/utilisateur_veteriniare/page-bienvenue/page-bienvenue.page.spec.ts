import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBienvenuePage } from './page-bienvenue.page';

describe('PageBienvenuePage', () => {
  let component: PageBienvenuePage;
  let fixture: ComponentFixture<PageBienvenuePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageBienvenuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
