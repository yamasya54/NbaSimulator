"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */


const player = require('../controllers/player')

// URL: /players

router.route('/')
    .get(player.list)
    


/* ------------------------------------------------------- */
module.exports = router