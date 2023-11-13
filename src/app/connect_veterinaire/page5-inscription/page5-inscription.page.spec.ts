import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page5InscriptionPage } from './page5-inscription.page';

describe('Page5InscriptionPage', () => {
  let component: Page5InscriptionPage;
  let fixture: ComponentFixture<Page5InscriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Page5InscriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
