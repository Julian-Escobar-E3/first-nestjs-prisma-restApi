import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [TaskController],
  providers: [TaskService],
  imports:[PrismaModule]// traemos al modulo de prisma para usarlo en task y task ya esta llamado en app.module entonces deberia servir
})
export class TaskModule {}
