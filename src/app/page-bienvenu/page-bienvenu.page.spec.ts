import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageBienvenuPage } from './page-bienvenu.page';

describe('PageBienvenuPage', () => {
  let component: PageBienvenuPage;
  let fixture: ComponentFixture<PageBienvenuPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageBienvenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
