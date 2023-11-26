import { Module } from '@nestjs/common';
import { PageLevelAccessService } from './page-level-access.service';
import { PageLevelAccessController } from './page-level-access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PageLevelAccessController],
  providers: [PageLevelAccessService],
})
export class PageLevelAccessModule {}
