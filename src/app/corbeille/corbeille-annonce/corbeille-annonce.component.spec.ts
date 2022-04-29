import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleAnnonceComponent } from './corbeille-annonce.component';

describe('CorbeilleAnnonceComponent', () => {
  let component: CorbeilleAnnonceComponent;
  let fixture: ComponentFixture<CorbeilleAnnonceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleAnnonceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
