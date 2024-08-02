import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('task')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 200 })
  title: string;

  @Column('varchar', { length: 500 })
  description: string;

  @Column('tinyint')
  status: boolean;

  @Column('datetime')
  creation_date: Date;
}
