// Customer model
const { pool } = require('../config/db');

// Get all customers
const getAllCustomers = async () => {
  try {
    const [rows] = await pool.query('SELECT * FROM customers ORDER BY id DESC');
    return rows;
  } catch (error) {
    throw error;
  }
};

// Get a single customer by ID
const getCustomerById = async (id) => {
  try {
    const [rows] = await pool.query('SELECT * FROM customers WHERE id = ?', [id]);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

// Create a new customer
const createCustomer = async (customer) => {
  try {
    const { name, email, phone_number, segment } = customer;
    const [result] = await pool.query(
      'INSERT INTO customers (name, email, phone_number, segment) VALUES (?, ?, ?, ?)',
      [name, email, phone_number, segment]
    );
    return { id: result.insertId, ...customer };
  } catch (error) {
    throw error;
  }
};

// Update a customer
const updateCustomer = async (id, customer) => {
  try {
    const { name, email, phone_number, segment } = customer;
    await pool.query(
      'UPDATE customers SET name = ?, email = ?, phone_number = ?, segment = ? WHERE id = ?',
      [name, email, phone_number, segment, id]
    );
    return { id, ...customer };
  } catch (error) {
    throw error;
  }
};

// Delete a customer
const deleteCustomer = async (id) => {
  try {
    const [result] = await pool.query('DELETE FROM customers WHERE id = ?', [id]);
    return result.affectedRows > 0;
  } catch (error) {
    throw error;
  }
};

// Get customers by segment
const getCustomersBySegment = async (segment) => {
  try {
    const [rows] = await pool.query('SELECT * FROM customers WHERE segment = ?', [segment]);
    return rows;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomersBySegment
};