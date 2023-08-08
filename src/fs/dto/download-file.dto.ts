import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class DownloadFileDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  file_path: string;
}
