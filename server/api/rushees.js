import { Router } from 'express'
var connection = require('../configs/sequelize')
const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/rushees', function (req, res, next) {
  const query = 'SELECT * FROM Rushees;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(users => {
      console.log(users)
      res.json(users)
    })
})

/* GET user by ID. */
router.get('/rushees/:sid', function (req, res, next) {
  const sid = req.params.sid
  const query = 'SELECT * FROM Rushees WHERE sid = :sid ;'
  connection.query(query, 
    { 
      type: connection.QueryTypes.SELECT,
      replacements: {
        sid: sid
      }
    })
    .then(user => {
      if (user.length === 1 ) {
        res.json(user[0])
      } else {
        res.status(404).json({})
      }
    })
})

router.post('/rushees/add', bodyParser.json(), function (req, res, next) {
  const rid = req.body.data.rid
  const sid = req.body.data.sid

  const query = 'INSERT INTO Rushee (sid, rid) VALUES (:sid, :rid) ;'
  connection.query(query,
    {
      type: connection.QueryTypes.INSERT,
      replacements: {
        sid:sid,
        rid: rid 
      }
    })
    .then(result => {
      // result[1] is the number of rows changed
      res.send('/rushees')
    })
})

export default router