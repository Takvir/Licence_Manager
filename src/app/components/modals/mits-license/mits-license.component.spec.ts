import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MitsLicenseComponent } from './mits-license.component';

describe('MitsLicenseComponent', () => {
  let component: MitsLicenseComponent;
  let fixture: ComponentFixture<MitsLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MitsLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MitsLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
