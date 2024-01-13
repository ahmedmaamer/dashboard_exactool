import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandUseChangesComponent } from './land-use-changes.component';

describe('LandUseChangesComponent', () => {
  let component: LandUseChangesComponent;
  let fixture: ComponentFixture<LandUseChangesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandUseChangesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandUseChangesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
