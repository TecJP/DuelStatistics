import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import User from './User';

@Entity('statistics')
class Statistic {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  deck: string;

  @Column('int')
  wins: number;

  @Column('int')
  loses: number;

  @Column()
  duelist_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'duelist_id' })
  duelist: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Statistic;
