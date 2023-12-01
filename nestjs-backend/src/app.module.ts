import {
  Module,
  NestModule,
  RequestMethod,
  MiddlewareConsumer,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { GlobalExceptionFilter } from 'src/common/handlers/catch-exception';
import { TransformationInterceptor } from 'src/common/handlers/response-success';

import { CheckRequestData } from './middleware/check-request';
import { CheckIsEmptyId } from './middleware/check-empty-id';

const envModule = ConfigModule.forRoot({
  isGlobal: true,
});

import { PrismaModule } from './prisma/prisma.module';

// PERMISSION
import { PermissionModule } from './permission/permission.module';

// USER
import { AuthModule } from './auth/auth.module';
import { UserRoleModule } from './user-role/user-role.module';
import { SystemUserModule } from './system-user/system-user.module';

// GENERAL SETUP
import { RegionModule } from './region/region.module';
import { TownshipModule } from './township/township.module';
// import { FirebaseAdminModule } from './firebase-admin/firebase-admin.module';

@Module({
  imports: [
    envModule,
    PrismaModule,

    // PERMISSION
    PermissionModule,

    // USER
    AuthModule,
    UserRoleModule,
    SystemUserModule,

    // GENERAL
    RegionModule,
    TownshipModule,

    // SETUP FCM
    //FirebaseAdminModule,

    // NOTIFICATION
    //CloudMessageModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformationInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CheckRequestData).forRoutes({
      path: '*',
      method: RequestMethod.POST,
    });
    consumer.apply(CheckRequestData).forRoutes({
      path: '*',
      method: RequestMethod.PATCH,
    });
    consumer.apply(CheckIsEmptyId).forRoutes({
      // if ID is empty remove ID
      path: '*',
      method: RequestMethod.POST,
    });
  }
}
