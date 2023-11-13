import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilPrincipalPage } from './profil-principal.page';

describe('ProfilPrincipalPage', () => {
  let component: ProfilPrincipalPage;
  let fixture: ComponentFixture<ProfilPrincipalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilPrincipalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
