import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterForumPage } from './ajouter-forum.page';

describe('AjouterForumPage', () => {
  let component: AjouterForumPage;
  let fixture: ComponentFixture<AjouterForumPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterForumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
