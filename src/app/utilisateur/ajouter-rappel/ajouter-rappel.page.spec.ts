import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AjouterRappelPage } from './ajouter-rappel.page';

describe('AjouterRappelPage', () => {
  let component: AjouterRappelPage;
  let fixture: ComponentFixture<AjouterRappelPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AjouterRappelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
