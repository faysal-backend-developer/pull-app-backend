'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : {default: mod}
  }
Object.defineProperty(exports, '__esModule', {value: true})
const express_1 = __importDefault(require('express'))
const cors_1 = __importDefault(require('cors'))
const body_parser_1 = __importDefault(require('body-parser'))
const votes_router_1 = __importDefault(
  require('./app/modules/votes/votes.router'),
)
const app = (0, express_1.default)()
// Default Middleware configuration
app.use(express_1.default.json())
app.use(express_1.default.urlencoded({extended: true}))
// Third party middleware configuration
app.use((0, cors_1.default)())
app.use(body_parser_1.default.json())
app.use(body_parser_1.default.urlencoded({extended: true}))
app.use('/api/v1/vote', votes_router_1.default)
app.get('/api/v1/test-api', (req, res) => {
  res.status(200).json({
    message: 'Pull App Running from test API',
  })
})
exports.default = app
