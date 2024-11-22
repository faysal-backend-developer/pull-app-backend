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
      res.status(400).json({message: 'Data is required'})
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
      res.status(404).json({message: 'No votes found'})
    } else {
      res.status(200).json({
        status: 200,
        message: 'Vote created successfully',
        data: result,
      })
    }
  })
const voteDelete = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {id} = req.params
    if (!id) {
      res.status(400).json({message: 'Id is required'})
    } else {
      const result = yield votes_service_1.voteService.deleteVotes(id)
      res.status(200).json({
        status: 200,
        message: 'Vote Deleted successfully',
        data: result,
      })
    }
  })
const UpdateVote = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {id} = req.params
    const {data} = req.body
    if (!id || !data) {
      res.status(400).json({message: 'Id and data are required'})
    } else {
      const result = yield votes_service_1.voteService.updateVote(id, data)
      res.status(200).json({
        status: 200,
        message: 'Vote Updated successfully',
        data: result,
      })
    }
  })
const findOneVote = (req, res) =>
  __awaiter(void 0, void 0, void 0, function* () {
    const {id} = req.params
    if (!id) {
      res.status(400).json({message: 'Id is required'})
    } else {
      const result = yield votes_service_1.voteService.getOneVote(id)
      res.status(200).json({
        status: 200,
        message: 'Vote Get successfully',
        data: result,
      })
    }
  })
exports.voteController = {
  create,
  allVotes,
  voteDelete,
  UpdateVote,
  findOneVote,
}
