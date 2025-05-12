// Analytics controller
const customerModel = require('../models/customerModel');
const campaignModel = require('../models/campaignModel');

// Get summary stats
const getSummaryStats = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    const campaigns = await campaignModel.getAllCampaigns();
    const activeCampaigns = await campaignModel.getActiveCampaigns();
    
    // Count customers by segment
    const customersBySegment = {};
    customers.forEach(customer => {
      if (customer.segment) {
        customersBySegment[customer.segment] = (customersBySegment[customer.segment] || 0) + 1;
      }
    });
    
    // Count campaigns by type
    const campaignsByType = {};
    campaigns.forEach(campaign => {
      if (campaign.type) {
        campaignsByType[campaign.type] = (campaignsByType[campaign.type] || 0) + 1;
      }
    });
    
    res.status(200).json({
      success: true,
      data: {
        totalCustomers: customers.length,
        totalCampaigns: campaigns.length,
        activeCampaigns: activeCampaigns.length,
        customersBySegment,
        campaignsByType
      }
    });
  } catch (error) {
    console.error('Error fetching analytics:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

// Generate AI insights (simplified for demo)
const generateInsights = async (req, res) => {
  try {
    const customers = await customerModel.getAllCustomers();
    const campaigns = await campaignModel.getAllCampaigns();
    
    // Simplified sentiment analysis (in a real application, this would use actual NLP)
    let sentimentScore = 0;
    customers.forEach(customer => {
      // Very basic "analysis" based on email domain for demo purposes
      if (customer.email) {
        if (customer.email.includes('gmail.com')) sentimentScore += 1;
        if (customer.email.includes('business')) sentimentScore += 2;
        if (customer.email.includes('complaint')) sentimentScore -= 2;
      }
    });
    
    const averageSentiment = customers.length > 0 ? sentimentScore / customers.length : 0;
    let sentimentLabel = 'Neutral';
    if (averageSentiment > 0.5) sentimentLabel = 'Positive';
    else if (averageSentiment < -0.5) sentimentLabel = 'Negative';
    
    // Simple campaign performance prediction
    let campaignPerformance = 'Average';
    if (campaigns.length > 3) campaignPerformance = 'Good';
    else if (campaigns.length < 2) campaignPerformance = 'Poor';
    
    res.status(200).json({
      success: true,
      data: {
        customerSentiment: sentimentLabel,
        campaignPrediction: campaignPerformance,
        insights: [
          `You have ${customers.length} customers in your database.`,
          `Your ${campaigns.length} campaigns are predicted to perform ${campaignPerformance.toLowerCase()}.`,
          `Overall customer sentiment appears to be ${sentimentLabel.toLowerCase()}.`
        ]
      }
    });
  } catch (error) {
    console.error('Error generating insights:', error);
    res.status(500).json({
      success: false,
      message: 'Server error'
    });
  }
};

module.exports = {
  getSummaryStats,
  generateInsights
};