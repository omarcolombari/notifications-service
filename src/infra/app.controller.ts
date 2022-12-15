import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';
import { PrismaService } from './prisma.service';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(): Promise<Notification[]> {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        category,
        content,
        recipientId,
      },
    });
  }
}
