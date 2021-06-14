import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModularKitchenComponent } from './modular-kitchen.component';

describe('ModularKitchenComponent', () => {
  let component: ModularKitchenComponent;
  let fixture: ComponentFixture<ModularKitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModularKitchenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModularKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
