
import { BeforeInsert, Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";



@Entity("toDo")
export class toDo{
    @PrimaryColumn()
    id:string
    @BeforeInsert()
    assign(){
        this.id=generateID()
    }
    @UpdateDateColumn()
    updated:Date
    @CreateDateColumn()
    created:Date
    @Column()
    content:string

}
export function generateID() {
  return 'noetik' + Date.now().toString() + Math.floor(Math.random() * 1000);
}