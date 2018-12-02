import 'reflect-metadata';

import { APIGatewayProxyHandler } from 'aws-lambda';
import * as winston from 'winston';

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
  level: 'debug',
  prettyPrint: true,
  timestamp: true
});
