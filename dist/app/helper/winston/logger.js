'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const winston_1 = require('winston')
const winston_daily_rotate_file_1 = __importDefault(
  require('winston-daily-rotate-file'),
)
const config_1 = __importDefault(require('../../../config'))
const {combine, timestamp, label, prettyPrint} = winston_1.format
const path_1 = __importDefault(require('path'))
const logger = (0, winston_1.createLogger)({
  level: 'info',
  format: combine(label({label: 'Pull App'}), timestamp(), prettyPrint()),
  transports: [
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'pull-app-%DATE%.error.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'error',
    }),
    new winston_daily_rotate_file_1.default({
      filename: path_1.default.join(
        process.cwd(),
        'logs',
        'pull-app-%DATE%.info.log',
      ),
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '2d',
      level: 'info',
    }),
  ],
})
if (config_1.default.node_env == 'development') {
  logger.add(
    new winston_1.transports.Console({
      format: winston_1.format.simple(),
    }),
  )
}
exports.default = logger
