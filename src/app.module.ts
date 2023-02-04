import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbtestModule } from './dbtest/dbtest.module';
import { LeavingwordModule } from './leavingword/leavingword.module';
import { UserModule } from './user/user.module';
import { PostitemModule } from './postitem/postitem.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({  // 链接数据库
      type: 'mysql',    // 数据库类型
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '143590',
      database: 'mijingdb',   // 数据库的名称
      // entities: [], 数据库的实体,现在建议使用这个 建议使用自动引入实体
      synchronize: true,
      autoLoadEntities: true // 自动引入实体
    }),
    DbtestModule,
    LeavingwordModule,
    UserModule,
    PostitemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
