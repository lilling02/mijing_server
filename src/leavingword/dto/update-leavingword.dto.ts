import { PartialType } from '@nestjs/mapped-types';
import { CreateLeavingwordDto } from './create-leavingword.dto';

export class UpdateLeavingwordDto extends PartialType(CreateLeavingwordDto) {}
