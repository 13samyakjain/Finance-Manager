const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    if (email == null || password == null || email == '' || password == '') {
      return res.status(401).json({ message: 'Empty Email Or Password' })
    }
    var x = await Register.findOne({ email: email.toLowerCase() });
    if (x == null || x == undefined || x.length <= 0) {
      return res.status(401).json({ message: 'Invalid User Id' });
    } else {
      var t = bcrypt.compareSync(password.toString(), x['password']);
      if (!t) {
        return res.status(401).json({ message: 'Login failure' });
      }
      const token = jwt.sign(
        { email: x['email'], userId: x['_id'] },
        'This_Should_Be_Working',
        { expiresIn: '1h' }
      );
      res.status(200).json({ token: token });
    }
  });