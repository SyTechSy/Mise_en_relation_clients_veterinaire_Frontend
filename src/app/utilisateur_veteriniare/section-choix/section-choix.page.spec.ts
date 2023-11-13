import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionChoixPage } from './section-choix.page';

describe('SectionChoixPage', () => {
  let component: SectionChoixPage;
  let fixture: ComponentFixture<SectionChoixPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SectionChoixPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
