import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteNomPage } from './ajouter-sante-nom.page';

describe('AjouterSanteNomPage', () => {
  let component: AjouterSanteNomPage;
  let fixture: ComponentFixture<AjouterSanteNomPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteNomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
