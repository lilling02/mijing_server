import { PartialType } from '@nestjs/mapped-types';
import { CreateDbtestDto } from './create-dbtest.dto';

export class UpdateDbtestDto extends PartialType(CreateDbtestDto) {}
