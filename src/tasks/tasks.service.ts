import { Injectable, Inject } from '@nestjs/common';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @Inject('TASK_REPOSITORY')
    private readonly tasksRepository: Repository<TaskEntity>,
  ) {}

  async create(task: CreateTaskDto): Promise<void> {
    await this.tasksRepository.save(task); //! await car nous n'attendons pas de retour
  }

  async findAll(): Promise<TaskEntity[]> {
    return this.tasksRepository.find(); //! return car nous attendons des données en retour
  }

  async findOne(id: number): Promise<TaskEntity> {
    return this.tasksRepository.findOneBy({ id });
  }

  async update(task: UpdateTaskDto): Promise<void> {
    await this.tasksRepository.save(task);
  }

  async remove(id: number): Promise<void> {
    await this.tasksRepository.delete(id);
  }
}
