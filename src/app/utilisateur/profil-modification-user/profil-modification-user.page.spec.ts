import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilModificationUserPage } from './profil-modification-user.page';

describe('ProfilModificationUserPage', () => {
  let component: ProfilModificationUserPage;
  let fixture: ComponentFixture<ProfilModificationUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilModificationUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
