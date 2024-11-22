import {createLogger, format, transports} from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
import config from '../../../config'
const {combine, timestamp, label, prettyPrint} = format
import path from 'path'

const logger = createLogger({
  level: 'info',
  format: combine(label({label: 'Pull App'}), timestamp(), prettyPrint()),
  transports: [
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'pull-app-%DATE%.error.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'error',
    }),
    new DailyRotateFile({
      filename: path.join(process.cwd(), 'logs', 'pull-app-%DATE%.info.log'),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'info',
    }),
  ],
})

if (config.node_env == 'development') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  )
}

export default logger
