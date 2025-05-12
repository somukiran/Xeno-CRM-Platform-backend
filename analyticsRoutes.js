// Analytics routes
const express = require('express');
const router = express.Router();
const {
  getSummaryStats,
  generateInsights
} = require('../controllers/analyticsController');

// Routes
router.get('/summary', getSummaryStats);
router.get('/insights', generateInsights);

module.exports = router;