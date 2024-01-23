import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateRecordDto } from './dto/create-record.dto';
import { UpdateRecordDto } from './dto/update-record.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Record } from '@prisma/client';

@Injectable()
export class RecordService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<Record[]> {
    return await this.prisma.record.findMany({
      where: query,
      include: {
        language: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'name' });

    const result = await this.prisma.record.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      include: {
        language: {
          select: {
            name: true,
          },
        },
      },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.record.count();

    return {
      data: result,
      pageInfo: {
        page: skip,
        pageSize: take,
        totalRowCount: total,
      },
    };
  }

  async getOneById(id: string): Promise<any> {
    return await this.prisma.record.findUnique({
      where: { id: id },
      include: {
        language: {
          select: {
            name: true,
          },
        },
      },
    });
  }

  async create(body: CreateRecordDto): Promise<Record> {
    return await this.prisma.record.create({ data: body });
  }

  async update(id: string, body: UpdateRecordDto): Promise<Record> {
    return await this.prisma.record.update({
      where: {
        id: id,
      },
      data: body,
    });
  }

  async delete(id: string): Promise<Record> {
    return await this.prisma.record.delete({ where: { id: id } });
  }
}
