import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorbeilleCategorieComponent } from './corbeille-categorie.component';

describe('CorbeilleCategorieComponent', () => {
  let component: CorbeilleCategorieComponent;
  let fixture: ComponentFixture<CorbeilleCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorbeilleCategorieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorbeilleCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
