import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailAnimalSantePage } from './detail-animal-sante.page';

describe('DetailAnimalSantePage', () => {
  let component: DetailAnimalSantePage;
  let fixture: ComponentFixture<DetailAnimalSantePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailAnimalSantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
