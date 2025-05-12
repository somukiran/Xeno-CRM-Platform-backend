// Campaign model
const { pool } = require('../config/db');

// Get all campaigns
const getAllCampaigns = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM campaigns ORDER BY id DESC');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Get a single campaign by ID
const getCampaignById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM campaigns WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

// Create a new campaign
const createCampaign = async (campaign) => {
  try {
    const { name, type, content, segment, status } = campaign;
    const [result] = await pool.query(
      'INSERT INTO campaigns (name, type, content, segment, status) VALUES (?, ?, ?, ?, ?)',
      [name, type, content, segment, status || 'Active']
    );
    return { id: result.insertId, ...campaign };
  } catch (error) {
    throw error;
  }
};

// Update a campaign
const updateCampaign = async (id, campaign) => {
  try {
    const { name, type, content, segment, status } = campaign;
    await pool.query(
      'UPDATE campaigns SET name = ?, type = ?, content = ?, segment = ?, status = ? WHERE id = ?',
      [name, type, content, segment, status, id]
    );
    return { id, ...campaign };
  } catch (error) {
    throw error;
  }
};

// Delete a campaign
const deleteCampaign = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM campaigns WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Get campaigns by segment
const getCampaignsBySegment = async (segment) => {
  try {
    const [rows] = await pool.query('SELECT * FROM campaigns WHERE segment = ?', [segment]);
    return rows;
  } catch (error) {
    throw error;
  }
};

// Get active campaigns
const getActiveCampaigns = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM campaigns WHERE status = ?', ['Active']);
    return rows;
  } catch (error) {
    throw error;
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