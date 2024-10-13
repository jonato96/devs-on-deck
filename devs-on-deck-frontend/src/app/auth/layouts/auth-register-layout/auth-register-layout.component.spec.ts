import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRegisterLayoutComponent } from './auth-register-layout.component';

describe('AuthRegisterLayoutComponent', () => {
  let component: AuthRegisterLayoutComponent;
  let fixture: ComponentFixture<AuthRegisterLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthRegisterLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRegisterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
