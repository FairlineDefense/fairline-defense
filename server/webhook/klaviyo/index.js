<<<<<<< HEAD
=======
const express = require('express');
>>>>>>> 45ded06286484f6326fb21f6bcfd5e065a7599b9
const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

<<<<<<< HEAD
router.post('/verify-email', async (req, res, next) => {
    try {
      console.log('web hook called')
      await User.update({emailVerified: true}, {where:{email: req.body.email}})
=======
router.post('/verify-email', express.raw({type: 'application/json'}), async (req, res, next) => {
  try {
       const body = JSON.parse(req.body)
      console.log(req.body, body)
       await User.update({emailVerified: true}, {where:{email: body.email}})
      return res.status(200).send()
>>>>>>> 45ded06286484f6326fb21f6bcfd5e065a7599b9
    } catch (err) {
      next(err)
    }
  })
  
  router.post('/verify-phone', async (req, res, next) => {
      try {
        await User.update({phoneVerified: true}, {where:{phone: req.body.phone}})
      } catch (err) {
        next(err)
      }
    })