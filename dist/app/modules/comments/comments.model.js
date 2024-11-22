'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
exports.Comments = void 0
const mongoose_1 = require('mongoose')
const commentsSchema = new mongoose_1.Schema(
  {
    voteId: {
      type: String,
      required: true,
    },
    comments: [
      {
        userId: {type: String, required: true},
        comment: {type: String, required: true},
      },
    ],
  },
  {
    timestamps: true,
  },
)
exports.Comments = (0, mongoose_1.model)('Comments', commentsSchema)
