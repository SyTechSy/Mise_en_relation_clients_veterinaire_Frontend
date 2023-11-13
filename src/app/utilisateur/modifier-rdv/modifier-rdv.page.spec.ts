import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierRdvPage } from './modifier-rdv.page';

describe('ModifierRdvPage', () => {
  let component: ModifierRdvPage;
  let fixture: ComponentFixture<ModifierRdvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
