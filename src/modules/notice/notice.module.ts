import { Module } from '@nestjs/common';
import { NoticeService } from './notice.service';
import { NoticeController } from './notice.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Notice } from 'src/entities/notice.entity';
import { NoticeRepository } from './notice.repository';
import { NoticeRepositoryImpl } from './notice.repositoryImpl';

@Module({
  imports: [TypeOrmModule.forFeature([Notice])],
  controllers: [NoticeController],
  providers: [NoticeService, { provide: NoticeRepository, useClass: NoticeRepositoryImpl }],
})
export class NoticeModule {}
