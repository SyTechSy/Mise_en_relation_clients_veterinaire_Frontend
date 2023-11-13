import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailleRdvPage } from './detaille-rdv.page';

describe('DetailleRdvPage', () => {
  let component: DetailleRdvPage;
  let fixture: ComponentFixture<DetailleRdvPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailleRdvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
