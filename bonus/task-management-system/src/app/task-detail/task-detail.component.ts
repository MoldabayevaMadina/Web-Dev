import { Component, inject, Input } from '@angular/core';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { Task } from '../task';
import { TaskService } from '../task.service';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  imports: [BaseTaskComponent, DatePipe, RouterLink],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent {
  task!: Task;
  taskId: number;
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor(private taskService: TaskService) {
    this.taskId = +this.route.snapshot.params['id'];
    this.task = this.taskService.getTaskById(this.taskId)!;
  }

}
