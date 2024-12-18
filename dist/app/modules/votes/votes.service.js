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
exports.voteService = void 0
const votes_model_1 = require('./votes.model')
const create = data =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_model_1.Vote.create(data)
    if (!result) {
      throw new Error(`Could not create Vote`)
    } else {
      return result
    }
  })
const updateVote = (id, data) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_model_1.Vote.findByIdAndUpdate({_id: id}, data)
    if (!result) {
      throw new Error(`Could not find & Update Vote`)
    } else {
      return result
    }
  })
const getOneVote = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_model_1.Vote.findById({_id: id})
    if (!result) {
      throw new Error(`Could not find Vote`)
    } else {
      return result
    }
  })
const allVotes = () =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_model_1.Vote.find()
    if (!result) {
      throw new Error(`Could not find`)
    } else {
      return result
    }
  })
const deleteVotes = id =>
  __awaiter(void 0, void 0, void 0, function* () {
    const result = yield votes_model_1.Vote.deleteOne({_id: id})
    if (!result) {
      throw new Error(`Could not delete Vote`)
    } else {
      return result
    }
  })
exports.voteService = {
  create,
  allVotes,
  deleteVotes,
  updateVote,
  getOneVote,
}
