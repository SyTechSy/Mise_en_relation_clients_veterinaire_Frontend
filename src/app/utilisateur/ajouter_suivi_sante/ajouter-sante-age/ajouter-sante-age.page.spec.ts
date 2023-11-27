import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteAgePage } from './ajouter-sante-age.page';

describe('AjouterSanteAgePage', () => {
  let component: AjouterSanteAgePage;
  let fixture: ComponentFixture<AjouterSanteAgePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteAgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
