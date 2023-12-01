import { Notice } from 'src/entities/notice.entity';
import { CreateNoticeInput } from './dto/createNotice.input';

export interface NoticeRepository {
  findNoticePagenation(limit: number, offset: number): Promise<Notice[]>;
  getNoticeCount(): Promise<number>;
  createNotice(createNoticeInput: CreateNoticeInput): Promise<Notice>;
}

export const NoticeRepository = Symbol('NoticeRepository');
