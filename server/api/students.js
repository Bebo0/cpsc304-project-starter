import { Router } from 'express'
var connection = require('../configs/sequelize')
// const bodyParser = require('body-parser')

const router = Router()

/* GET users listing. */
router.get('/students', function (req, res, next) {
  const query = 'SELECT * FROM students;'
  connection.query(query, { type: connection.QueryTypes.SELECT })
    .then(students => {
      console.log(students)
      res.json(students)
    })
})

/* GET user by ID. */
// router.get('/students/:sid', function (req, res, next) {
//   const sid = req.params.sid
//   const query = 'SELECT * FROM students WHERE sid = :sid ;'
//   connection.query(query, 
//     { 
//       type: connection.QueryTypes.SELECT,
//       replacements: {
//         sid: sid
//       }
//     })
//     .then(user => {
//       if (user.length === 1 ) {
//         res.json(user[0])
//       } else {
//         res.status(404).json({})
//       }
//     })
// })

// // INSERT
// router.post('/students/add', bodyParser.json(), function (req, res, next) {
//   const rid = req.body.data.rid
//   const sid = req.body.data.sid

//   const query = 'INSERT INTO students (sid, rid) VALUES (:sid, :rid) ;'
//   connection.query(query,
//     {
//       type: connection.QueryTypes.INSERT,
//       replacements: {
//         sid:sid,
//         rid: rid 
//       }
//     })
//     .then(result => {
//       // result[1] is the number of rows changed
//       res.send('/students')
//     })
// })


// router.post('/students/update', bodyParser.json(), function (req, res, next) {
//   const sid = req.body.data.sid
//   const rid = req.body.data.rid


//   const query = 'UPDATE students SET sid = :sid, rid = :rid WHERE sid = :sid ;'
//   connection.query(query,
//     {
//       type: connection.QueryTypes.UPDATE,
//       replacements: {
//         sid: sid,
//         rid: rid
//       }
//     })
//     .then(result => {
//       // result[1] is the number of rows changed
//       res.send('/students')
//     })
// })

export default router