import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSantePhotoPage } from './ajouter-sante-photo.page';

describe('AjouterSantePhotoPage', () => {
  let component: AjouterSantePhotoPage;
  let fixture: ComponentFixture<AjouterSantePhotoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSantePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
