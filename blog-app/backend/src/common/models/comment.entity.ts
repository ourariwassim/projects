import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { user } from './user.entity';
import { blog } from './blog.entity';

@Entity()
export class comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  content: string;
  @CreateDateColumn()
  created: Date;
  @ManyToOne(() => user, (user) => user.comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: user;

  @ManyToOne(() => blog, (blog) => blog.comment, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  blog: blog;
}
