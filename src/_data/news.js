const axios = require("axios");
require("dotenv").config();

module.exports = async function getUser() {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=tesla&from=2021-04-10&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=6`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

// getUser();
