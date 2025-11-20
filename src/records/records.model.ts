// src/records/records.model.ts

import { Table, Column, Model, DataType } from 'sequelize-typescript';

export interface RecordAttributes {
  id: number;
  name: string;
  description?: string;
}

export interface RecordCreationAttributes
  extends Omit<RecordAttributes, 'id'> {}

@Table({
  tableName: 'records',
  timestamps: true,
})
export class Record extends Model<RecordAttributes, RecordCreationAttributes> {
  
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;
}
