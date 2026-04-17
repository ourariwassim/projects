import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ColumnMetadata } from 'typeorm/browser/metadata/ColumnMetadata.js';
import { UUID } from 'typeorm/driver/mongodb/bson.typings.js';
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column({ enum: ['normal', 'admin'] })
  role: 'normal' | 'admin';
}
