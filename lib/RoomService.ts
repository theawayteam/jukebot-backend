import { DynamoDB } from 'aws-sdk';
import { plainToClass } from 'class-transformer';

import Room from '../model/Room';

export default class RoomService {

  private client = new DynamoDB.DocumentClient();

  public async list(): Promise<Room[]> {
    const response = await this.client.scan({
      TableName: process.env.ROOMS_TABLE_NAME
    }).promise();
    return plainToClass(Room, response.Items);
  }

  public async get(name: string): Promise<Room> {
    const response = await this.client.get({
      Key: {
        name
      },
      TableName: process.env.ROOMS_TABLE_NAME
    }).promise();
    return plainToClass(Room, response.Item);
  }

  public async save(room: Room): Promise<void> {
    await this.client.put({
      Item: room,
      TableName: process.env.ROOMS_TABLE_NAME
    }).promise();
  }
}
