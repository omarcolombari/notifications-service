import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationAlreadyRead } from './errors/notification-already-read';
import { NotificationNotFound } from './errors/notification-not-found';

interface IReadNotificationRequest {
  notificationId: string;
}

type ReadNotificationResponse = void;

@Injectable()
export class ReadNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: IReadNotificationRequest,
  ): Promise<ReadNotificationResponse> {
    const { notificationId } = request;

    const notification = await this.notificationsRepository.findById(
      notificationId,
    );

    if (!notification) {
      throw new NotificationNotFound();
    }

    if (notification.readAt) {
      throw new NotificationAlreadyRead();
    }

    notification.read();

    await this.notificationsRepository.save(notification);
  }
}
