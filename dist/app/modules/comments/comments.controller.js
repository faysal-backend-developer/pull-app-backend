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
exports.commentsController = void 0
const comments_service_1 = require('./comments.service')
const apiError_1 = __importDefault(require('../../errors/apiError'))
const http_status_codes_1 = require('http-status-codes')
const create = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {comments} = req.body
    if (!comments) {
      throw new apiError_1.default(
        http_status_codes_1.StatusCodes.NO_CONTENT,
        'Comments Data is required',
      )
    } else {
      const result = yield comments_service_1.commentService.create(comments)
      res.status(200).json({
        status: 200,
        message: 'Comments created successfully',
        data: result,
      })
    }
  })
exports.commentsController = {
  create,
}
