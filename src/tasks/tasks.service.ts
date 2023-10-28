import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'First Task',
      description: 'First Task Description',
      status: TaskStatus.PENDING,
    },
    {
      id: 2,
      title: 'Second Task',
      description: 'Second Task Description',
      status: TaskStatus.PENDING,
    },
  ];
  getAllTasks() {
    return this.tasks;
  }
  getTask(id: number) {
    return this.getAllTasks().find((task) => task.id === id);
  }
  createTask({ title, description }: { title: string; description: string }) {
    const task: Task = {
      id: this.tasks.length + 1,
      title,
      description,
      status: TaskStatus.PENDING,
    };
    this.tasks.push(task);
    return task;
  }
  updateTask() {}
  deleteTask() {}
}
