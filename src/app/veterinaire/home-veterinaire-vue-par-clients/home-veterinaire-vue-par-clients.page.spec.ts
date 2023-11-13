import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeVeterinaireVueParClientsPage } from './home-veterinaire-vue-par-clients.page';

describe('HomeVeterinaireVueParClientsPage', () => {
  let component: HomeVeterinaireVueParClientsPage;
  let fixture: ComponentFixture<HomeVeterinaireVueParClientsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeVeterinaireVueParClientsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
