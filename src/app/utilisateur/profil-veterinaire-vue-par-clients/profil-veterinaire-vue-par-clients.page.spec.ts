import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfilVeterinaireVueParClientsPage } from './profil-veterinaire-vue-par-clients.page';

describe('ProfilVeterinaireVueParClientsPage', () => {
  let component: ProfilVeterinaireVueParClientsPage;
  let fixture: ComponentFixture<ProfilVeterinaireVueParClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProfilVeterinaireVueParClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
