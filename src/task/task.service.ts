import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  async getAllTasks(): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async getTaskById(id: number): Promise<Task> {
    const task = await this.prisma.task.findUnique({ where: { id: id } });
    return task;
  }

  async createTask(data: Task): Promise<Task> {
    return await this.prisma.task.create({ data: data });
  }

  async updateTask(id: number, data: Task): Promise<Task> {
    const updatedTask = await this.prisma.task.update({
      where: { id: id },
      data: data,
    });
    return updatedTask;
  }

  async deleteTask(id: number): Promise<Task> {
    const task = await this.prisma.task.delete({ where: { id: id } });
    return task;
  }
}
