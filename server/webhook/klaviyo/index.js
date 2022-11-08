const express = require('express');
const router = require('express').Router()
const {User} = require('../../db/models')
module.exports = router

router.post('/verify-email', express.raw({type: 'application/json'}), async (req, res, next) => {
  try {
      console.log('hit')
      // const body = JSON.parse(req.body)
      // console.log(body)
      // await User.update({emailVerified: true}, {where:{email: body.email}})
      return 'HIT'
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