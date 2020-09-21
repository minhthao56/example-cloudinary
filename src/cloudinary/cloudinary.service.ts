import { Injectable, Inject } from '@nestjs/common';
import { Cloudinary } from './cloudinary.provider';

@Injectable()
export class CloudinaryService {
  constructor(@Inject(Cloudinary) private cloudinary) {
    console.log('This is the cloudinary instance:');
    // console.log(this.cloudinary)
  }

  async uploadImage(path: string): Promise<any> {
    this.cloudinary.config({
      cloud_name: 'du4arxzzj',
      api_key: '821499727673838',
      api_secret: 'hDcEoltxpFdpSkkBeffwV7-Rqso',
    });

    const result = await this.cloudinary.uploader.upload(path, function(
      error: any,
      result: any,
    ) {
      console.log(error);
      console.log(result);
    });

    return result;
  }
}
