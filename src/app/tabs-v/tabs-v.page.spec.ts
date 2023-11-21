import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabsVPage } from './tabs-v.page';

describe('TabsVPage', () => {
  let component: TabsVPage;
  let fixture: ComponentFixture<TabsVPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TabsVPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
