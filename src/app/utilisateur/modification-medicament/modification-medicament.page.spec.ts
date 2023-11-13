import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificationMedicamentPage } from './modification-medicament.page';

describe('ModificationMedicamentPage', () => {
  let component: ModificationMedicamentPage;
  let fixture: ComponentFixture<ModificationMedicamentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ModificationMedicamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
