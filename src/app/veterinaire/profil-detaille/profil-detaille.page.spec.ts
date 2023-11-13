import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilDetaillePage } from './profil-detaille.page';

describe('ProfilDetaillePage', () => {
  let component: ProfilDetaillePage;
  let fixture: ComponentFixture<ProfilDetaillePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilDetaillePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
