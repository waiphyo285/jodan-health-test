import { Injectable } from '@nestjs/common';
import {
  CreateAppLevelAccessDto,
  CreatePageLevelAccessDto,
} from './dto/permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppLevelAccess, PageLevelAccess } from '@prisma/client';

@Injectable()
export class PermissionService {
  constructor(private readonly prisma: PrismaService) {}

  async getAppAccessByFilter(query: any): Promise<AppLevelAccess[]> {
    return await this.prisma.appLevelAccess.findMany({
      where: query,
    });
  }

  async createAppAccessMany(
    appLevelAccess: CreateAppLevelAccessDto,
  ): Promise<any> {
    await this.prisma.appLevelAccess.deleteMany({
      where: { role_id: appLevelAccess.role_id },
    });
    const createdObj = await this.prisma.appLevelAccess.createMany({
      data: appLevelAccess.appLevelAccesses,
    });
    return createdObj.count;
  }

  async getPageAccessByFilter(query: any): Promise<PageLevelAccess[]> {
    return await this.prisma.pageLevelAccess.findMany({
      where: query,
      include: {
        user_role: true,
      },
    });
  }

  async createPageAccessMany(
    pageLevelAccess: CreatePageLevelAccessDto,
  ): Promise<any> {
    await this.prisma.pageLevelAccess.deleteMany({
      where: { role_id: pageLevelAccess.role_id },
    });
    const createdObj = await this.prisma.pageLevelAccess.createMany({
      data: pageLevelAccess.pageLevelAccesses,
    });
    return createdObj.count;
  }
}
