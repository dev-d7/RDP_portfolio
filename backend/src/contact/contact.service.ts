import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { CreateContactDto } from './dto/create-contact.dto';

export interface ContactRecord extends CreateContactDto {
  id: string;
  receivedAt: string;
  ip?: string;
  userAgent?: string;
}

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private readonly dataDir = path.join(process.cwd(), 'data');
  private readonly dataFile = path.join(this.dataDir, 'contacts.jsonl');

  constructor(private readonly config: ConfigService) {}

  async submit(
    dto: CreateContactDto,
    meta: { ip?: string; userAgent?: string } = {},
  ): Promise<{ id: string; receivedAt: string }> {
    const record: ContactRecord = {
      ...dto,
      id: `lead_${Date.now().toString(36)}_${Math.random()
        .toString(36)
        .slice(2, 8)}`,
      receivedAt: new Date().toISOString(),
      ip: meta.ip,
      userAgent: meta.userAgent,
    };

    await this.persist(record);
    await this.notify(record);

    this.logger.log(
      `New lead [${record.id}] from ${record.email} (${record.company || 'no company'})`,
    );

    return { id: record.id, receivedAt: record.receivedAt };
  }

  private async persist(record: ContactRecord): Promise<void> {
    try {
      await fs.mkdir(this.dataDir, { recursive: true });
      await fs.appendFile(this.dataFile, JSON.stringify(record) + '\n', 'utf8');
    } catch (err) {
      this.logger.error(
        `Failed to persist lead ${record.id}: ${(err as Error).message}`,
      );
    }
  }

  private async notify(record: ContactRecord): Promise<void> {
    const webhook = this.config.get<string>('SLACK_WEBHOOK_URL');
    if (!webhook) return;

    const text =
      `*New RDP lead — ${record.name}* (${record.email})\n` +
      `Company: ${record.company || '—'}\n` +
      `Message: ${record.message}`;

    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });
      if (!res.ok) {
        this.logger.warn(`Slack webhook returned ${res.status}`);
      }
    } catch (err) {
      this.logger.warn(`Slack notify failed: ${(err as Error).message}`);
    }
  }

  /** Returns all stored leads. Intended for an admin-protected endpoint later. */
  async list(): Promise<ContactRecord[]> {
    try {
      const raw = await fs.readFile(this.dataFile, 'utf8');
      return raw
        .split('\n')
        .filter(Boolean)
        .map((line) => JSON.parse(line) as ContactRecord);
    } catch {
      return [];
    }
  }
}
