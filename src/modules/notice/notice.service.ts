import { Inject, Injectable } from '@nestjs/common';
import { NoticeRepository } from './notice.repository';
import { Notice } from 'src/entities/notice.entity';
import { CreateNoticeInput } from './dto/createNotice.input';

@Injectable()
export class NoticeService {
  constructor(@Inject(NoticeRepository) private noticeRepository: NoticeRepository) {}

  async noticePagenation(limit: number, offset: number) {
    const noticeData = await this.noticeRepository.findNoticePagenation(limit, offset);
    const noticeCount = await this.noticeRepository.getNoticeCount();

    let BASE_URL = process.env.BASE_URL;

    let next: string;
    let nextValue = offset + limit;
    if (offset + limit > noticeCount) {
      next = null;
    } else {
      next = `${BASE_URL}/notice?limit=${limit}&offset=${nextValue}`;
    }

    let previous: string;
    let previousValue = offset - limit;
    if (offset - limit >= 0) {
      previous = `${BASE_URL}/notice?limit=${limit}&offset=${previousValue}`;
    } else {
      previous = null;
    }

    return { noticeData, next, previous, count: noticeCount };
  }

  async createNotice(createNoticeInput: CreateNoticeInput): Promise<Notice> {
    const createdNotice = await this.noticeRepository.createNotice(createNoticeInput);
    return createdNotice;
  }
}
