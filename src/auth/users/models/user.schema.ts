import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseEntity } from 'src/shared/base/base.entity';

@Schema({ versionKey: false })
export class User extends BaseEntity {
  @Prop()
  uid: string;

  @Prop()
  email: string;

  @Prop()
  password?: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
