import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationModifierPage } from './information-modifier.page';

describe('InformationModifierPage', () => {
  let component: InformationModifierPage;
  let fixture: ComponentFixture<InformationModifierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformationModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
