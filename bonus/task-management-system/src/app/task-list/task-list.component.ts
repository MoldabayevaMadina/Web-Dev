import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { TaskItemComponent } from '../task-item/task-item.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-task-list',
  imports: [BaseTaskComponent, TaskItemComponent, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})

export class TaskListComponent implements OnInit {
  taskList: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskList = this.taskService.getTasks(); 
  }

  markAsCompleted(taskId: number): void {
    this.taskService.updateTaskStatus(taskId);
    console.log(this.taskList);
  }
}