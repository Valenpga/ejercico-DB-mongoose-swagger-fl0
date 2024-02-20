const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/create', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.put('/id/:_id', async (req, res) => {
    try {
        const { _id } = req.params;
        await User.findByIdAndUpdate(_id, { username: req.body.username });
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
