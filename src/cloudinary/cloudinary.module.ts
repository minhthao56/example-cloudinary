import { Module } from '@nestjs/common';
import { cloudinaryProvider } from './cloudinary.provider';
import { CloudinaryService } from './cloudinary.service';
import { CloudinaryController } from './cloudinary.controller';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
  ],
  providers: [cloudinaryProvider, CloudinaryService],
  exports: [cloudinaryProvider, CloudinaryService],
  controllers: [CloudinaryController],
})
export class CloudinaryModule {}
