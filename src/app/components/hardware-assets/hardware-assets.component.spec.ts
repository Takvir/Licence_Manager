import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareAssetsComponent } from './hardware-assets.component';

describe('HardwareAssetsComponent', () => {
  let component: HardwareAssetsComponent;
  let fixture: ComponentFixture<HardwareAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareAssetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardwareAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
