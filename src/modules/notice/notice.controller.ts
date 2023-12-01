import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { Notice } from 'src/entities/notice.entity';
import { CreateNoticeInput } from './dto/createNotice.input';

@Controller('notice')
export class NoticeController {
  constructor(private readonly noticeService: NoticeService) {}

  @Get()
  async noticeDataPaganation(@Query('limit') limit: number, @Query('offset') offset: number) {
    const noticeData = await this.noticeService.noticePagenation(limit, offset);
    return noticeData;
  }

  @Post()
  async createNotice(@Body() createNoticeInput: CreateNoticeInput): Promise<Notice> {
    const createdNotice = await this.noticeService.createNotice(createNoticeInput);
    return createdNotice;
  }
}
