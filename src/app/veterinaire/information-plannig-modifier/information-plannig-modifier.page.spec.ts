import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformationPlannigModifierPage } from './information-plannig-modifier.page';

describe('InformationPlannigModifierPage', () => {
  let component: InformationPlannigModifierPage;
  let fixture: ComponentFixture<InformationPlannigModifierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InformationPlannigModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
