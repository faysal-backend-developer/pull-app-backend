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
Object.defineProperty(exports, '__esModule', {value: true})
exports.voteController = void 0
const votes_service_1 = require('./votes.service')
const create = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {data} = req.body
    if (!data) {
      return res.status(400).json({message: 'Data is required'})
    } else {
      const newVote = yield votes_service_1.voteService.create(data)
      res.status(200).json({
        status: 200,
        message: 'Vote created successfully',
        data: newVote,
      })
    }
  })
const allVotes = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_service_1.voteService.allVotes()
    if (!result) {
      return res.status(404).json({message: 'No votes found'})
    } else {
      res.status(200).json({
        status: 200,
        message: 'Vote created successfully',
        data: result,
      })
    }
  })
exports.voteController = {
  create,
  allVotes,
}
