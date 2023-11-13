import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifierForumPage } from './modifier-forum.page';

describe('ModifierForumPage', () => {
  let component: ModifierForumPage;
  let fixture: ComponentFixture<ModifierForumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModifierForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
