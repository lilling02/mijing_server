import { PartialType } from '@nestjs/mapped-types';
import { CreatePostitemDto } from './create-postitem.dto';

export class UpdatePostitemDto extends PartialType(CreatePostitemDto) {}
