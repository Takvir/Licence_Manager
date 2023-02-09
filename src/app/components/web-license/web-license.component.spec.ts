import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebLicenseComponent } from './web-license.component';

describe('WebLicenseComponent', () => {
  let component: WebLicenseComponent;
  let fixture: ComponentFixture<WebLicenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebLicenseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebLicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
