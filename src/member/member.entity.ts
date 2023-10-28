// Create a gym member entity for a Nest application in TypeScript
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Gym } from '../gym/gym.entity';

@Entity()
export class Member {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ unique: true })
  email: string;
  @Column({ unique: true, default: null })
  dni: number;
  @Column({ default: 'active' })
  status: string;
  @ManyToMany(() => Gym)
  @JoinTable()
  gym: Gym[];
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;
}
