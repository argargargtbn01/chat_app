import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { User } from './models/user.schema';

export class UsersRepository {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async create(document: any) : Promise<User> {
    const createdDocument = await this.userModel.create({
      ...document,
      _id: new Types.ObjectId(),
    });
    return (await createdDocument.save()).toJSON();
  }

  async findOne(filterQuery: FilterQuery<User>): Promise<User> {
    const document = await this.userModel.findOne(filterQuery, {}, { lean: true });
    if (!document) {
      return null;
    }
    return document as User;
  }
}
