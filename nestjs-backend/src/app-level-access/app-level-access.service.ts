import { Injectable } from '@nestjs/common';
import { CreateManyAppLevelAccessDto } from './dto/create-app-level-access.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { AppLevelAccess } from '@prisma/client';

@Injectable()
export class AppLevelAccessService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<AppLevelAccess[]> {
    return await this.prisma.appLevelAccess.findMany({
      where: query,
    });
  }

  async createMany(appLevelAccess: CreateManyAppLevelAccessDto): Promise<any> {
    const deletedData = await this.prisma.appLevelAccess.deleteMany({
      where: { role_id: appLevelAccess.role_id },
    });
    const createdObj = await this.prisma.appLevelAccess.createMany({
      data: appLevelAccess.appLevelAccesses,
    });
    return createdObj.count;
  }
}
