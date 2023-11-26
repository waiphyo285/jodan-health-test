import { Injectable } from '@nestjs/common';
import { CreatePageLevelAccessDto } from './dto/create-page-level-access.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PageLevelAccess } from '@prisma/client';

@Injectable()
export class PageLevelAccessService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllByFilter(query: any): Promise<PageLevelAccess[]> {
    return await this.prisma.pageLevelAccess.findMany({
      where: query,
      include: {
        user_role: true,
      },
    });
  }

  async createMany(pageLevelAccess: CreatePageLevelAccessDto): Promise<any> {
    await this.prisma.pageLevelAccess.deleteMany({
      where: { role_id: pageLevelAccess.role_id },
    });
    const createdObj = await this.prisma.pageLevelAccess.createMany({
      data: pageLevelAccess.pageLevelAccesses,
    });
    return createdObj.count;
  }
}
