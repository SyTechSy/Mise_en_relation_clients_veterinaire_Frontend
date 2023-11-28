import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSanteDescriptionPage } from './ajouter-sante-description.page';

describe('AjouterSanteDescriptionPage', () => {
  let component: AjouterSanteDescriptionPage;
  let fixture: ComponentFixture<AjouterSanteDescriptionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSanteDescriptionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
