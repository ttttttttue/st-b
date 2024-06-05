import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { MachinesModule } from './machines/machines.module';
import { UploadController } from './upload/upload.controller';
import { join } from 'path';

@Module({
  imports: [
    MachinesModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }),
  ],
  controllers: [UploadController],
})
export class AppModule {}
