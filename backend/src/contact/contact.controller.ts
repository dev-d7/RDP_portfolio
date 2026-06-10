import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Ip,
  Post,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';
import { CreateContactDto } from './dto/create-contact.dto';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contact: ContactService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async submit(
    @Body() dto: CreateContactDto,
    @Ip() ip: string,
    @Req() req: Request,
  ) {
    const result = await this.contact.submit(dto, {
      ip,
      userAgent: req.headers['user-agent'] as string | undefined,
    });

    return {
      ok: true,
      message: "Thanks — we'll be in touch within one business day.",
      ...result,
    };
  }
}
