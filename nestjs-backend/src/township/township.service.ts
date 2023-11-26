import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateTownshipDto } from './dto/create-township.dto';
import { UpdateTownshipDto } from './dto/update-township.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Township } from '@prisma/client';

@Injectable()
export class TownshipService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<Township[]> {
    return await this.prisma.township.findMany({
      where: query,
      include: {
        region: {
          select: {
            name: true,
            name_mm: true,
          },
        },
      },
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'name' });

    const result = await this.prisma.township.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      include: {
        region: {
          select: {
            name: true,
            name_mm: true,
          },
        },
      },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.township.count();

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
    return await this.prisma.township.findUnique({
      where: { id: id },
      include: {
        region: {
          select: {
            name: true,
            name_mm: true,
          },
        },
      },
    });
  }

  async create(township: CreateTownshipDto): Promise<Township> {
    return await this.prisma.township.create({ data: township });
  }

  async update(id: string, township: UpdateTownshipDto): Promise<Township> {
    return await this.prisma.township.update({
      where: {
        id: id,
      },
      data: township,
    });
  }

  async delete(id: string): Promise<Township> {
    return await this.prisma.township.delete({ where: { id: id } });
  }
}
