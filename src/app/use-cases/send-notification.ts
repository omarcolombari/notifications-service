import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface ISendNotificationRequest {
  recipientId: string;
  category: string;
  content: string;
}

interface ISendNotificationResponse {
  notification: Notification;
}

export class SendNotification {
  async execute(
    request: ISendNotificationRequest,
  ): Promise<ISendNotificationResponse> {
    const { category, content, recipientId } = request;

    const notification = new Notification({
      category,
      content: new Content(content),
      recipientId,
    });

    return {
      notification,
    };
  }
}
