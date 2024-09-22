import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];  // Temporary storage for tasks

  constructor() {}

  getTasks(): Task[] {
    return this.tasks;  // Return the array of tasks
  }

  addTask(task: Task): void {
    task.id = this.tasks.length + 1;  // Assign an ID based on the length
    this.tasks.push(task);  // Add the new task to the array
  }

  updateTask(id: number, updatedTask: Task): void {
    const index = this.tasks.findIndex(task => task.id === id);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], ...updatedTask };  // Update the task
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id);  // Remove the task by ID
  }
}
