import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SejmComponent } from './sejm.component';

describe('SejmComponent', () => {
  let component: SejmComponent;
  let fixture: ComponentFixture<SejmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SejmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SejmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
