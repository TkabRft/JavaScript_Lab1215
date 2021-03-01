import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TableWorkersComponent } from './table-workers.component';

describe('TableWorkersComponent', () => {
  let component: TableWorkersComponent;
  let fixture: ComponentFixture<TableWorkersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWorkersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWorkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
