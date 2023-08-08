import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseGuards,
} from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ApiKeyGuard } from 'src/auth/guard/api-key.guard';
import { DownloadFileDto } from './dto/download-file.dto';
import { FsRoutes } from './fs.routes';
import { FsService } from './fs.service';
import { ApiFile } from './helper/api-file.decorator';
import { writeFileToStorage } from './helper/files-storage';
import { ParseFile } from './helper/parse-file.pipe';

@UseGuards(ApiKeyGuard)
@ApiTags('fs')
@ApiSecurity('apiKey')
@Controller('fs')
export class FsController {
  constructor(private readonly fsService: FsService) {}

  @Post(FsRoutes.uploadFile)
  @ApiFile('file', writeFileToStorage)
  uploadFile(@UploadedFile(ParseFile) file: Express.Multer.File) {
    // uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file, ' <===== file [fs.controller.ts]');
    return this.fsService.uploadFile(file);
  }

  @Post(FsRoutes.downloadFile)
  download(@Body() downloadFileDto: DownloadFileDto) {
    // uploadFile(@UploadedFile() file: Express.Multer.File) {
    // console.log(file, ' <===== file [fs.controller.ts]');
    return this.fsService.downloadFile(downloadFileDto);
  }
}
