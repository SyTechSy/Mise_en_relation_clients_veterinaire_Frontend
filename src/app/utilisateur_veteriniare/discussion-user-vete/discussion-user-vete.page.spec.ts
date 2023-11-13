import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiscussionUserVetePage } from './discussion-user-vete.page';

describe('DiscussionUserVetePage', () => {
  let component: DiscussionUserVetePage;
  let fixture: ComponentFixture<DiscussionUserVetePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiscussionUserVetePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
