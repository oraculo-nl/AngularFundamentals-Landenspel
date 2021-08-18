import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KenJeLandComponent } from './ken-je-land.component';

describe('KenJeLandComponent', () => {
  let component: KenJeLandComponent;
  let fixture: ComponentFixture<KenJeLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KenJeLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KenJeLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
