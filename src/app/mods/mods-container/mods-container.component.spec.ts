import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModsContainerComponent } from './mods-container.component';

describe('ModsContainerComponent', () => {
  let component: ModsContainerComponent;
  let fixture: ComponentFixture<ModsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
