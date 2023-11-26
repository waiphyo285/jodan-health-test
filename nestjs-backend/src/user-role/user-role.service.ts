import { Injectable } from '@nestjs/common';
import { Helpers } from 'src/utilities/helpers';

import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserRole } from '@prisma/client';

@Injectable()
export class UserRoleService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<UserRole[]> {
    return await this.prisma.userRole.findMany({
      where: query,
    });
  }

  async getByPagination(query: any): Promise<any> {
    const { filterObj, searchKey, searchVal, skip, take, sortKey, sortVal } =
      Helpers.queryOption(query, { searchKey: 'name' });

    const result = await this.prisma.userRole.findMany({
      where: { ...filterObj },
      orderBy: { [sortKey]: sortVal },
      skip: skip * take,
      take: take,
    });

    const total = await this.prisma.userRole.count();

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
    return await this.prisma.userRole.findUnique({
      where: { id: id },
    });
  }

  async create(userRole: CreateUserRoleDto): Promise<UserRole> {
    return await this.prisma.userRole.create({ data: userRole });
  }

  async update(id: string, userRole: UpdateUserRoleDto): Promise<UserRole> {
    return await this.prisma.userRole.update({
      where: { id: id },
      data: userRole,
    });
  }

  async delete(id: string): Promise<UserRole> {
    return await this.prisma.userRole.delete({ where: { id: id } });
  }
}
