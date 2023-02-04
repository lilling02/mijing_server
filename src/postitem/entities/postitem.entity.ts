import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, OneToMany } from "typeorm";
import { Comment } from "./comment.entity";
@Entity()
export class Postitem {

    @PrimaryGeneratedColumn({ type: 'int', comment: '帖子的id' })
    id: number

    @Column({ type: 'varchar', length: 255, comment: '发帖人的uuid' })
    master_forum_useruuid: string

    @CreateDateColumn({ type: 'timestamp', comment: '帖子创建时间' })
    create_time: string

    @Column({ type: 'text', comment: '帖子的头部' })
    post_header: string

    @Column({ type: 'longtext', comment: '帖子的内容' })
    post_content: string

    @OneToMany(() => Comment, (comment) => comment.postitem)
    comment: Comment[]
}
