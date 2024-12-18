'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const app_1 = __importDefault(require('./app'))
const config_1 = __importDefault(require('./config'))
const db_1 = __importDefault(require('./db'))
const logger_1 = __importDefault(require('./app/helper/winston/logger'))
const server = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield (0, db_1.default)(config_1.default.db_url)
      app_1.default.listen(config_1.default.port, () => {
        logger_1.default.info(`server listening on ${config_1.default.port}`)
      })
    } catch (error) {
      logger_1.default.error(`Server Error: ${error}`)
    }
  })
server()
