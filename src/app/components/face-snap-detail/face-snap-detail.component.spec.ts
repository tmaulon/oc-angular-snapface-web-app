import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceSnapDetailComponent } from './face-snap-detail.component';

describe('FaceSnapDetailComponent', () => {
  let component: FaceSnapDetailComponent;
  let fixture: ComponentFixture<FaceSnapDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceSnapDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceSnapDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
