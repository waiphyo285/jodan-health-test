import { Module } from '@nestjs/common';
import { TownshipService } from './township.service';
import { TownshipController } from './township.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [TownshipController],
  providers: [TownshipService],
})
export class TownshipModule {}
