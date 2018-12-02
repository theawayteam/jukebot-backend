import { APIGatewayProxyHandler } from 'aws-lambda';
import * as winston from 'winston';

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  level: 'debug',
  prettyPrint: true,
  timestamp: true
});

export const index: APIGatewayProxyHandler = async (event, context) => {
  return {
    body: JSON.stringify({
      input: event,
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!'
    }),
    statusCode: 200
  };
};
