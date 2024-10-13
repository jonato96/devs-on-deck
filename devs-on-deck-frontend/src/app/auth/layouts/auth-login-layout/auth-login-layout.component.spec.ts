import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLoginLayoutComponent } from './auth-login-layout.component';

describe('AuthLoginLayoutComponent', () => {
  let component: AuthLoginLayoutComponent;
  let fixture: ComponentFixture<AuthLoginLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthLoginLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthLoginLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
