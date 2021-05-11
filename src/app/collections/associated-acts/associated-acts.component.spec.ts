import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociatedActsComponent } from './associated-acts.component';

describe('AssociatedActsComponent', () => {
  let component: AssociatedActsComponent;
  let fixture: ComponentFixture<AssociatedActsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociatedActsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociatedActsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
