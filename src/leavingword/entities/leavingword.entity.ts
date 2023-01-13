import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

// @PrimaryGeneratedColumn() 创建一个主列,该值将使用自动增量值自动生成

@Entity()
export class LeavingWord {

    @PrimaryGeneratedColumn({ type: 'int', comment: '每一条留言的id' })
    id: number

    @Column({ type: 'varchar', length: 255, comment: '收到留言的用户名' })
    fullName: string

    @Column({ type: 'text', comment: '留言内容' })
    content: string

    @Column({ type: 'datetime', comment: '存储留言的时间', nullable: true })
    creattime: string
}   
