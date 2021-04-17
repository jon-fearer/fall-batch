import { Logger } from './logger';

export class LoggerFactory {
  static getLogger() {
    return new Logger(console);
  }
}
