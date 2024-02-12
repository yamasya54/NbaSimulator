"use strict"
/* -------------------------------------------------------
    NODEJS EXPRESS | CLARUSWAY FullStack Team
------------------------------------------------------- */
const router = require('express').Router()
/* ------------------------------------------------------- */
// routes/:

// URL: /

// car:
router.use('/teams', require('./team'))
// reservation:
router.use('/players', require('./player'))
// document:
// router.use('/documents', require('./document'))

/* ------------------------------------------------------- */
module.exports = router