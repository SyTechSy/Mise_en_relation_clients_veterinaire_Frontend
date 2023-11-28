import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterSantePoidPage } from './ajouter-sante-poid.page';

describe('AjouterSantePoidPage', () => {
  let component: AjouterSantePoidPage;
  let fixture: ComponentFixture<AjouterSantePoidPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterSantePoidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
