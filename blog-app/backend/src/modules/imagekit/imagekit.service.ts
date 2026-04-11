import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import ImageKit from 'imagekit';
import { blog } from 'src/common/models/blog.entity';
import { multer } from 'multer';
import { createReadStream } from 'fs';

@Injectable()
export class imagekitService {
  imageKit: ImageKit;
  constructor(private readonly configService: ConfigService) {
    this.imageKit = new ImageKit({
      privateKey: this.configService.getOrThrow('IMAGEKIT_PRIVATE_KEY'),
      publicKey: this.configService.getOrThrow('IMAGEKIT_PUBLIC_KEY'),
      urlEndpoint: this.configService.getOrThrow('IMAGEKIT_URL'),
    });
  }

  async uploadImage(file: multer.file, blogId: string): Promise<any> {
    console.log(blogId);
    const result = this.imageKit.upload({
      file: file.buffer,
      fileName: 'image' + blogId,
    });
    return await result;
  }
}
