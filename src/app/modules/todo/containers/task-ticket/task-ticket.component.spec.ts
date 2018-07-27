import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTicketComponent } from './task-ticket.component';

describe('TaskTicketComponent', () => {
  let component: TaskTicketComponent;
  let fixture: ComponentFixture<TaskTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
