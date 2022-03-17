import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeAttenteComponent } from './demande-attente.component';

describe('DemandeAttenteComponent', () => {
  let component: DemandeAttenteComponent;
  let fixture: ComponentFixture<DemandeAttenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeAttenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeAttenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
