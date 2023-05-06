const router = require('express').Router()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const User = require('../db/models/user')
const ResetKey = require('../db/models/resetkey')
module.exports = router

router.post('/login', async (req, res, next) => {
  try {
    const user = await User.findOne({where: {email: req.body.email}})
    if (!user) {
      console.log('No such user found:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else if (!user.correctPassword(req.body.password)) {
      console.log('Incorrect password for user:', req.body.email)
      res.status(401).send('Wrong username and/or password')
    } else {
      req.login(user, err => (err ? next(err) : res.json(user)))
    }
  } catch (err) {
    next(err) 
  }
})

router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    req.login(user, err => (err ? next(err) : res.json(user)))
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

router.get('/me', async (req, res) => {
  console.log('req.user', req.user)
  res.json(req.user)
})

router.post('/logout', function(req, res, next) {
  req.logout()
  req.session.destroy()
});


router.post('/update-password', async (req, res, next) => {

  const { token, password } = req.body;
  console.log(token);
  try {

    const resetKey = await ResetKey.findOne({
      where: {
        key: token,
        expiresAt: { [Op.gt]: new Date() } // check that the key hasn't expired
      }
    });

    if (!resetKey) {
      return res.status(400).json({ message: 'Invalid or expired reset key' });
    }
    // Update the user's password in the database
    const user = await User.findOne({ where: {email: resetKey.email} });

    if (!user) {
      console.log('User not found');
      return;
    }

    //Update the user's password
    await user.update({ password });
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Invalid token' });
  }
})

router.use('/google', require('./google'))
