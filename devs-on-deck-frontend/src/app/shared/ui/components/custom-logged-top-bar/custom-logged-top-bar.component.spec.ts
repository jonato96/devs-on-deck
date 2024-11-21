import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomLoggedTopBarComponent } from './custom-logged-top-bar.component';

describe('CustomLoggedTopBarComponent', () => {
  let component: CustomLoggedTopBarComponent;
  let fixture: ComponentFixture<CustomLoggedTopBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomLoggedTopBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomLoggedTopBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
