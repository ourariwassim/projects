import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { user } from './user.entity';
import { comment } from './comment.entity';

@Entity()
export class blog {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  content: string;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  category: string;
  @Column()
  image: string;
  @CreateDateColumn()
  created: string;
  @ManyToOne(() => user, (user) => user.blog, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  user: user;

  @OneToMany(() => comment, (comment) => comment.blog, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  comment: comment[];
}
