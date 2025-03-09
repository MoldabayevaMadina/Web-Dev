import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-base-task',
  imports: [],
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export class BaseTaskComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() category!: 'Work' | 'Personal' | 'Study';
  @Input() status!: string;
  @Input() deadline!: Date;
}
