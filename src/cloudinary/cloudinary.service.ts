import { Injectable, Inject, HttpStatus, HttpException } from '@nestjs/common';
import { Cloudinary } from './cloudinary.provider';
import * as fs from 'fs';

@Injectable()
export class CloudinaryService {
  constructor(@Inject(Cloudinary) private cloudinary) {}

  async uploadImage(path: string): Promise<any> {
    this.cloudinary.config({
      cloud_name: 'du4arxzzj',
      api_key: '821499727673838',
      api_secret: 'hDcEoltxpFdpSkkBeffwV7-Rqso',
    });

    const result = await this.cloudinary.uploader.upload(path, function(
      result: any,
      error: any,
    ) {
      fs.unlink(path, err => {
        console.log('Deteled!!');
      });
    });

    return result;
  }
}
