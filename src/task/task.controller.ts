import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from '@prisma/client';

@Controller('/task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getOneTask(@Param('id') id: string) {
    const taskFound = await this.taskService.getTaskById(+id);
    if (!taskFound) throw new NotFoundException('No se encuentra la tarea');
    return taskFound;
  }

  @Post()
  async postTask(@Body() data: Task) {
    return this.taskService.createTask(data);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    try {
      return await this.taskService.deleteTask(+id);
    } catch (error) {
      throw new NotFoundException(
        'No se encuentra la tarea que deseas eliminar',
      );
    }
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    return this.taskService.updateTask(+id, data);
  }
}
