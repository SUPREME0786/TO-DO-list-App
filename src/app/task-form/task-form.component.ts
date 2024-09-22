import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = { title: '', description: '', completed: false };

  isEditMode = false;

  constructor(private taskService: TaskService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      const existingTask = this.taskService.getTasks().find((task: Task) => task.id === +id);  // Specify Task type
      if (existingTask) {
        this.task = existingTask;
      }
    }
  }

  saveTask(): void {
    if (this.isEditMode) {
      this.taskService.updateTask(this.task.id!, this.task);
    } else {
      this.taskService.addTask(this.task);
    }
    this.router.navigate(['/task-list']);
  }
}
