import { Entity, PrimaryGeneratedColumn, PrimaryColumn, Column, CreateDateColumn } from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    forumUseruuid: string

    @Column({ type: "varchar", length: 64, comment: '贴吧用户的用户名列' })
    forumName: string

    @Column({ type: "varchar", length: 255, comment: '贴吧用户头像' })
    profilePhotoLink: string

    @Column({ type: "varchar", length: 255, comment: '贴吧用户主人的CloudID' })
    masterCloudID: string

    @CreateDateColumn({ type: "timestamp", nullable: true })
    create_time: Date
}
