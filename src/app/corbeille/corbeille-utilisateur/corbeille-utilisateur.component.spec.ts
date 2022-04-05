import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleUtilisateurComponent } from './corbeille-utilisateur.component';

describe('CorbeilleUtilisateurComponent', () => {
  let component: CorbeilleUtilisateurComponent;
  let fixture: ComponentFixture<CorbeilleUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
