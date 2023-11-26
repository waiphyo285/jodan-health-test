import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Region } from '@prisma/client';

@Injectable()
export class RegionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<Region[]> {
    return await this.prisma.region.findMany({
      where: query,
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'name' });

    const result = await this.prisma.region.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.region.count();

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
    return await this.prisma.region.findUnique({
      where: { id: id },
    });
  }

  async create(region: CreateRegionDto): Promise<Region> {
    return await this.prisma.region.create({ data: region });
  }

  async update(id: string, region: UpdateRegionDto): Promise<Region> {
    return await this.prisma.region.update({
      where: { id: id },
      data: region,
    });
  }

  async delete(id: string): Promise<Region> {
    return await this.prisma.region.delete({ where: { id: id } });
  }
}
