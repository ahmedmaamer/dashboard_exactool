import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAfforestationAndReforestationComponent } from './table-afforestation-and-reforestation.component';

describe('TableAfforestationAndReforestationComponent', () => {
  let component: TableAfforestationAndReforestationComponent;
  let fixture: ComponentFixture<TableAfforestationAndReforestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableAfforestationAndReforestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableAfforestationAndReforestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
