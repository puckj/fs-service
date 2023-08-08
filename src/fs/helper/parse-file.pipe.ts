import {
  ArgumentMetadata,
  Injectable,
  PipeTransform,
  BadRequestException,
} from '@nestjs/common';

@Injectable()
export class ParseFile implements PipeTransform {
  transform(
    files: Express.Multer.File,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _metadata: ArgumentMetadata,
  ): Express.Multer.File {
    // console.log(files, ' files in parse..');
    if (files === undefined || files === null) {
      throw new BadRequestException('please select your file@@@++++');
    }
    return files;
  }
}
