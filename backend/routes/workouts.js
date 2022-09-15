const { Router } = require("express")

const express = require('express')

const router = express.Router()

router
    .route('/')
    .get((req,res)=>{
        res.json({mssg: "get all data"})
    })
router
    .route('/:id')
    .get((req,res)=>{
        res.json({mssg: "get single data"})
    })


module.exports = router