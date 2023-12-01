import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';

@Entity('notice')
export class Notice {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'noticeId',
    comment: '공지사항의 ID',
  })
  noticeId: number;

  @Column('varchar', { name: 'title', comment: '공지사항의 제목' })
  title: string;

  @Column('varchar', { name: 'content', comment: '공지사항의 내용' })
  content: string;

  @CreateDateColumn({ name: 'createdAt', comment: '생성 날짜' })
  createdAt: Timestamp;

  @UpdateDateColumn({ name: 'updatedAt', comment: '업데이트 날짜' })
  updatedAt: Timestamp;
}
