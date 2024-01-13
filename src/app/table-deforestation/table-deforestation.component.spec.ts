import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDeforestationComponent } from './table-deforestation.component';

describe('TableDeforestationComponent', () => {
  let component: TableDeforestationComponent;
  let fixture: ComponentFixture<TableDeforestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDeforestationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDeforestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
