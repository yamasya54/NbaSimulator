"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


const team = require('../controllers/team')

// URL: /teams

router.route('/')
    .get(team.list)
   


/* ------------------------------------------------------- */
module.exports = router