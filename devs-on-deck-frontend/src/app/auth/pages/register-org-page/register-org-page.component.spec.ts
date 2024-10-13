import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterOrgPageComponent } from './register-org-page.component';

describe('RegisterOrgPageComponent', () => {
  let component: RegisterOrgPageComponent;
  let fixture: ComponentFixture<RegisterOrgPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterOrgPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterOrgPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
