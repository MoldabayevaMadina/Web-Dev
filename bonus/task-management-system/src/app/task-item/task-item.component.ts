import { Component, Output, EventEmitter } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [RouterLink, BaseTaskComponent,CommonModule],
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent extends BaseTaskComponent {
  @Output() markAsCompletedEvent = new EventEmitter<number>();

  markAsCompleted(): void {
    this.markAsCompletedEvent.emit(this.id);
  }
  DeadlineCheck() {
    const now = new Date();
    return (this.deadline) < now;
  }
  
}
