import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page3InscriptionPage } from './page3-inscription.page';

describe('Page3InscriptionPage', () => {
  let component: Page3InscriptionPage;
  let fixture: ComponentFixture<Page3InscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page3InscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
