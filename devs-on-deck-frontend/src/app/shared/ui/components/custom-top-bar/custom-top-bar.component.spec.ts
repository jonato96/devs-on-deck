import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTopBarComponent } from './custom-top-bar.component';

describe('CutomTopBarComponent', () => {
  let component: CustomTopBarComponent;
  let fixture: ComponentFixture<CustomTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
