import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page2InscriptionPage } from './page2-inscription.page';

describe('Page2InscriptionPage', () => {
  let component: Page2InscriptionPage;
  let fixture: ComponentFixture<Page2InscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page2InscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
