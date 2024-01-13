import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForestManagmentComponent } from './forest-managment.component';

describe('ForestManagmentComponent', () => {
  let component: ForestManagmentComponent;
  let fixture: ComponentFixture<ForestManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForestManagmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForestManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
