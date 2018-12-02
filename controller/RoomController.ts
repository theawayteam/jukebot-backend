import { APIGatewayEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

import RoomService from '../lib/RoomService';

const roomService = new RoomService();

module.exports.list = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const rooms = await roomService.list();
  return {
    body: JSON.stringify(rooms),
    statusCode: 200
  };
};

module.exports.get = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const name = event.pathParameters.name;
  const room = await roomService.get(name);
  if (!room) {
    return {
      body: '',
      statusCode: 404
    };
  }
  return {
    body: JSON.stringify(room),
    statusCode: 200
  };
};
