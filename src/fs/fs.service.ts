import { Injectable } from '@nestjs/common';
import ReturnMessage from 'src/function/ReturnMessage';
import { DownloadFileDto } from './dto/download-file.dto';
import { readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FsService {
  async uploadFile(file: Express.Multer.File) {
    try {
      console.log('test upload ++++++', file);
      const result = [
        {
          file_dr: file.path,
          file_path: file.destination + '/',
          file_name: file.filename,
        },
      ];
      return ReturnMessage.success(result);
    } catch (error) {
      console.error(error , 'uploadFile [ERROR]')
      return ReturnMessage.error(error);
    }
  }

  async downloadFile(downloadFileDto: DownloadFileDto) {
    try {
      const fileBuffer = await readFileSync(
        join(process.cwd(), downloadFileDto.file_path),
        { encoding: 'base64' },
      );
      console.log(fileBuffer);
      
      return ReturnMessage.success([fileBuffer]);
    } catch (error) {
      return ReturnMessage.error(error);
    }
  }
}
