import { IsNotEmpty, IsString, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  recipientId: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 256)
  content: string;

  @IsNotEmpty()
  @IsString()
  @Length(4, 128)
  category: string;
}
