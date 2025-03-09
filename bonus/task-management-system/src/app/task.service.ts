import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks = [
    { id: 1, title: 'Food', description: 'Buy milk, bread, cookies', category: 'Personal' as 'Personal', status: 'Not completed', deadline: new Date(2025, 3, 8, 0, 0, 0)},
    { id: 2, title: 'Homework', description: 'Do homework', category: 'Work' as 'Work', status: 'Not completed', deadline: new Date(2025, 3, 20, 0, 0 , 0) },
  ];

  constructor() { }
  getTasks() {
    return this.tasks;
  }
  getTaskById(id: number) {
    return this.tasks.find(task => task.id === id)
  }

  updateTaskStatus(id: number): void {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.status = 'Completed';
    }
    console.log(this.tasks);
  }
}
