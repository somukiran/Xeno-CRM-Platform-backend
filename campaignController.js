// Campaign controller
const campaignModel = require('../models/campaignModel');

// Get all campaigns
const getAllCampaigns = async (req, res) => {
  try {
    const campaigns = await campaignModel.getAllCampaigns();
    res.status(200).json({
      success: true,
      count: campaigns.length,
      data: campaigns
    });
  } catch (error) {
    console.error('Error fetching campaigns:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get a single campaign
const getCampaignById = async (req, res) => {
  try {
    const campaign = await campaignModel.getCampaignById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: campaign
    });
  } catch (error) {
    console.error('Error fetching campaign:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Create a new campaign
const createCampaign = async (req, res) => {
  try {
    // Basic validation
    const { name, type, content, segment } = req.body;
    
    if (!name || !type || !content || !segment) {
      return res.status(400).json({
        success: false,
        message: 'Please provide name, type, content, and segment'
      });
    }
    
    const campaign = await campaignModel.createCampaign({
      name,
      type,
      content,
      segment,
      status: req.body.status || 'Active'
    });
    
    res.status(201).json({
      success: true,
      data: campaign
    });
  } catch (error) {
    console.error('Error creating campaign:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Update a campaign
const updateCampaign = async (req, res) => {
  try {
    const campaign = await campaignModel.getCampaignById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }
    
    const updatedCampaign = await campaignModel.updateCampaign(
      req.params.id,
      req.body
    );
    
    res.status(200).json({
      success: true,
      data: updatedCampaign
    });
  } catch (error) {
    console.error('Error updating campaign:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Delete a campaign
const deleteCampaign = async (req, res) => {
  try {
    const campaign = await campaignModel.getCampaignById(req.params.id);
    
    if (!campaign) {
      return res.status(404).json({
        success: false,
        message: 'Campaign not found'
      });
    }
    
    await campaignModel.deleteCampaign(req.params.id);
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    console.error('Error deleting campaign:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get campaigns by segment
const getCampaignsBySegment = async (req, res) => {
  try {
    const campaigns = await campaignModel.getCampaignsBySegment(req.params.segment);
    
    res.status(200).json({
      success: true,
      count: campaigns.length,
      data: campaigns
    });
  } catch (error) {
    console.error('Error fetching campaigns by segment:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Get active campaigns
const getActiveCampaigns = async (req, res) => {
  try {
    const campaigns = await campaignModel.getActiveCampaigns();
    
    res.status(200).json({
      success: true,
      count: campaigns.length,
      data: campaigns
    });
  } catch (error) {
    console.error('Error fetching active campaigns:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getAllCampaigns,
  getCampaignById,
  createCampaign,
  updateCampaign,
  deleteCampaign,
  getCampaignsBySegment,
  getActiveCampaigns
};