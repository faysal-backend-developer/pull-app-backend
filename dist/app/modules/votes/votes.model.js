'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
exports.Vote = void 0
const mongoose_1 = require('mongoose')
const voteSchema = new mongoose_1.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    options: {
      type: Map,
      of: [String],
      default: {},
    },
    createdBy: {
      type: String,
      default: 'Admin',
    },
  },
  {
    timestamps: true,
  },
)
exports.Vote = (0, mongoose_1.model)('Vote', voteSchema)
