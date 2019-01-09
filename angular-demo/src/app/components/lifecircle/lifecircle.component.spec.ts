import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecircleComponent } from './lifecircle.component';

describe('LifecircleComponent', () => {
  let component: LifecircleComponent;
  let fixture: ComponentFixture<LifecircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
