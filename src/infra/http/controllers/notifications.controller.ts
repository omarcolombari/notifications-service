import { Body, Controller, Post } from '@nestjs/common';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller()
export class NotificationsController {
  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { category, content, recipientId } = body;
  }
}
