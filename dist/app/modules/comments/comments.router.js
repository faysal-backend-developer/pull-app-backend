'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
const express_1 = require('express')
const comments_controller_1 = require('./comments.controller')
const commentsRouter = (0, express_1.Router)()
commentsRouter.post('/create', comments_controller_1.commentsController.create)
exports.default = commentsRouter
