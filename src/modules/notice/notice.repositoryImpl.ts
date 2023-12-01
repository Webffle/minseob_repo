import { InjectRepository } from '@nestjs/typeorm';
import { NoticeRepository } from './notice.repository';
import { Notice } from 'src/entities/notice.entity';
import { Repository } from 'typeorm';
import { CreateNoticeInput } from './dto/createNotice.input';

export class NoticeRepositoryImpl implements NoticeRepository {
  constructor(@InjectRepository(Notice) private readonly noticeModel: Repository<Notice>) {}

  async findNoticePagenation(limit: number, offset: number): Promise<Notice[]> {
    const findNoticePagenation = await this.noticeModel
      .createQueryBuilder('notice')
      .offset(offset)
      .limit(limit)
      .getMany();

    return findNoticePagenation;
  }

  async createNotice({ title, content }: CreateNoticeInput): Promise<Notice> {
    const newNotice = this.noticeModel.create();
    newNotice.title = title;
    newNotice.content = content;
    const createdNotice = await this.noticeModel.save(newNotice);
    return createdNotice;
  }

  async getNoticeCount(): Promise<number> {
    const noticeCount = await this.noticeModel.count();
    return noticeCount;
  }
}
