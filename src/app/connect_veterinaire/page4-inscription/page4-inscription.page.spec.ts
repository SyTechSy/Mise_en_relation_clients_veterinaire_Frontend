import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page4InscriptionPage } from './page4-inscription.page';

describe('Page4InscriptionPage', () => {
  let component: Page4InscriptionPage;
  let fixture: ComponentFixture<Page4InscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page4InscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
