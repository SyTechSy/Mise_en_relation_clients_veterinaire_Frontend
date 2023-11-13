import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnexionVeterinairePage } from './connexion-veterinaire.page';

describe('ConnexionVeterinairePage', () => {
  let component: ConnexionVeterinairePage;
  let fixture: ComponentFixture<ConnexionVeterinairePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConnexionVeterinairePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
