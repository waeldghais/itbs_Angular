import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCatComponent } from './form-cat.component';

describe('FormCatComponent', () => {
  let component: FormCatComponent;
  let fixture: ComponentFixture<FormCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
