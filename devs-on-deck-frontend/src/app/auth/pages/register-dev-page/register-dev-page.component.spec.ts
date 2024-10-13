import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDevPageComponent } from './register-dev-page.component';

describe('RegisterDevPageComponent', () => {
  let component: RegisterDevPageComponent;
  let fixture: ComponentFixture<RegisterDevPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterDevPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterDevPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
