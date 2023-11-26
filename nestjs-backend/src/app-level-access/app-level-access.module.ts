import { Module } from '@nestjs/common';
import { AppLevelAccessService } from './app-level-access.service';
import { AppLevelAccessController } from './app-level-access.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppLevelAccessController],
  providers: [AppLevelAccessService],
})
export class AppLevelAccessModule {}
