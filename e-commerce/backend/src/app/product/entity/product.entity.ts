import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column()
  price: number;
  @Column()
  category: string;
  @Column('text', { array: true })
  image: string[];
  @Column()
  subCategory: string;
  @Column('text', { array: true })
  sizes: string[];
  @Column()
  bestseller: boolean;
  @Column()
  stock: number;
}
