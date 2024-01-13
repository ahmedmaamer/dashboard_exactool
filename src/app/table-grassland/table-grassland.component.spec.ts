import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableGrasslandComponent } from './table-grassland.component';

describe('TableGrasslandComponent', () => {
  let component: TableGrasslandComponent;
  let fixture: ComponentFixture<TableGrasslandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableGrasslandComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableGrasslandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
