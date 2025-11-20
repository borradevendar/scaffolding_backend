// src/records/records.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Record } from './records.model';
import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record)
    private readonly recordModel: typeof Record,
  ) {}

  async create(dto: CreateRecordDto): Promise<Record> {
    return await this.recordModel.create(dto);
  }

  async findAll(): Promise<Record[]> {
    return await this.recordModel.findAll();
  }

  async findOne(id: number): Promise<Record> {
    const record = await this.recordModel.findByPk(id);
    if (!record) throw new NotFoundException('Record not found');
    return record;
  }

  async update(id: number, dto: UpdateRecordDto): Promise<Record> {
    const record = await this.findOne(id);
    await record.update(dto);
    return record;
  }

  async remove(id: number): Promise<{ message: string }> {
    const record = await this.findOne(id);
    await record.destroy();
    
    return { message: 'Deleted successfully' };
  }
}
