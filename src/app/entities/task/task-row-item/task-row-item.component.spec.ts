import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskRowItemComponent } from './task-row-item.component';

describe('TaskRowItemComponent', () => {
  let component: TaskRowItemComponent;
  let fixture: ComponentFixture<TaskRowItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskRowItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskRowItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
