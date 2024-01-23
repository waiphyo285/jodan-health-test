import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Language } from '@prisma/client';

@Injectable()
export class LanguageService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<Language[]> {
    return await this.prisma.language.findMany({
      where: query,
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'name' });

    const result = await this.prisma.language.findMany({
      where: { [searchKey]: { contains: searchVal }, ...filterObj },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.language.count();

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
    return await this.prisma.language.findUnique({
      where: { id: id },
    });
  }

  async create(body: CreateLanguageDto): Promise<Language> {
    return await this.prisma.language.create({ data: body });
  }

  async update(id: string, body: UpdateLanguageDto): Promise<Language> {
    return await this.prisma.language.update({
      where: { id: id },
      data: body,
    });
  }

  async delete(id: string): Promise<Language> {
    return await this.prisma.language.delete({ where: { id: id } });
  }
}
