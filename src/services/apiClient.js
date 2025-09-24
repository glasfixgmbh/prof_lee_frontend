import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://dummyjson.com', 
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer YOUR_TOKEN`
  },
});

/**
 * GET
 * @param {string} url 
 * @param {object} params 
 * @returns {Promise<any>} - return data
 */
export const get = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error(`error in get request ${url}:`, error);
    throw error;
  }
};

/**
 * 
 * @param {string} url -/users
 * @param {object} data 
 * @returns {Promise<any>} - return data
 */
export const post = async (url, data = {}) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error(`error in post ${url}:`, error);
    throw error;
  }
};
