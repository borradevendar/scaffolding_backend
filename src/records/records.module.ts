// src/records/records.module.ts

import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RecordsController } from './records.controller';
import { RecordsService } from './records.service';
import { Record } from './records.model';

@Module({
  imports: [SequelizeModule.forFeature([Record])],
  controllers: [RecordsController],
  providers: [RecordsService],
})
export class RecordsModule {}
