import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { blog } from './blog.entity';
import { comment } from './comment.entity';

@Entity()
export class user {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @CreateDateColumn()
  created: Date;
  @UpdateDateColumn()
  updated: Date;
  @OneToMany(() => blog, (blog) => blog.user, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  blog: blog[];

  @OneToMany(() => comment, (comment) => comment.user)
  comment: comment[];
}
