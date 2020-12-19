import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopbarreComponent } from './topbarre.component';

describe('TopbarreComponent', () => {
  let component: TopbarreComponent;
  let fixture: ComponentFixture<TopbarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopbarreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopbarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
