import fs from 'fs';
import path from 'path';

export class Logger {
  private _logger: any;

  constructor(logger: any) {
    this._logger = logger;
  }

  setSilent() {
    this._logger = {
      log: () => null,
      logStartup: () => null,
      info: () => null,
    };
  }

  logStartup() {
    const startUpMessageFilePath = path.join(__dirname, 'startup-message.txt');
    this._logger.log(fs.readFileSync(startUpMessageFilePath).toString());
  }

  info(message: string) {
    const timestamp = this.getTimestamp();
    const level = 'INFO';
    this._logger.log(`${timestamp} ${level} ${message}`);
  }

  private getTimestamp() {
    const isoTimestamp = new Date().toISOString();
    return isoTimestamp
      .replace('T', ' ')
      .replace('Z', '');
  }
}
