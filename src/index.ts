import { LoggerFactory } from './logging/logger-factory';

const logger = LoggerFactory.getLogger();
// logger.setSilent();
logger.logStartup();
logger.info('hello');
