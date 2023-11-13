import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSuiviAnimalPage } from './detail-suivi-animal.page';

describe('DetailSuiviAnimalPage', () => {
  let component: DetailSuiviAnimalPage;
  let fixture: ComponentFixture<DetailSuiviAnimalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailSuiviAnimalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
