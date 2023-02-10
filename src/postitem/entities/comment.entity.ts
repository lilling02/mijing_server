import { Entity, PrimaryGeneratedColumn, CreateDateColumn, Column, ManyToOne } from "typeorm";
import { Postitem } from "./postitem.entity";
@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'text' })
    comment: string

    @Column({ type: 'varchar' })
    commentatoruuid: string

    @CreateDateColumn()
    createdate: string

    @Column()
    commented_post: number

    @Column({ nullable: true })
    commentator: string

    @ManyToOne(() => Postitem)
    postitem: Postitem

}