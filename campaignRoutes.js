// Campaign routes
const express = require('express');
const router = express.Router();
const {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getCampaignsBySegment,
  getActiveCampaigns
} = require('../controllers/campaignController');

// Routes
router.get('/', getAllCampaigns);
router.get('/active', getActiveCampaigns);
router.get('/:id', getCampaignById);
router.post('/', createCampaign);
router.put('/:id', updateCampaign);
router.delete('/:id', deleteCampaign);
router.get('/segment/:segment', getCampaignsBySegment);

module.exports = router;