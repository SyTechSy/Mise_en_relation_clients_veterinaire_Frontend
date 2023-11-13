import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page1InscriptionPage } from './page1-inscription.page';

describe('Page1InscriptionPage', () => {
  let component: Page1InscriptionPage;
  let fixture: ComponentFixture<Page1InscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page1InscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
