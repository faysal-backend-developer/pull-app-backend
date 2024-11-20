'use strict'
Object.defineProperty(exports, '__esModule', {value: true})
const express_1 = require('express')
const votes_controller_1 = require('./votes.controller')
const voteRouter = (0, express_1.Router)()
voteRouter.post('/create', votes_controller_1.voteController.create)
voteRouter.get('/', votes_controller_1.voteController.allVotes)
exports.default = voteRouter
