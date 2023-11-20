import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionUtilisateur2Page } from './inscription-utilisateur2.page';

describe('InscriptionUtilisateur2Page', () => {
  let component: InscriptionUtilisateur2Page;
  let fixture: ComponentFixture<InscriptionUtilisateur2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscriptionUtilisateur2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
