const User = require('../models/User');

// Get user profile
const getProfile = async (req, res) => {
    res.json(req.user);
};

module.exports = { getProfile };
