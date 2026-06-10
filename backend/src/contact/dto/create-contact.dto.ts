import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

const trim = ({ value }: { value: unknown }) =>
  typeof value === 'string' ? value.trim() : value;

export class CreateContactDto {
  @Transform(trim)
  @IsString()
  @IsNotEmpty({ message: 'Name is required.' })
  @MinLength(2, { message: 'Name looks too short.' })
  @MaxLength(120)
  name!: string;

  @Transform(trim)
  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @MaxLength(200)
  email!: string;

  @Transform(trim)
  @IsOptional()
  @IsString()
  @MaxLength(160)
  company?: string;

  @Transform(trim)
  @IsString()
  @MinLength(10, { message: 'A few words about your project would help.' })
  @MaxLength(4000)
  message!: string;
}
