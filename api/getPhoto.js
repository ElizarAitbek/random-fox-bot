const axios = require("axios");

async function getRandomFoxImage() {
  const unsplashApiUrl = "https://source.unsplash.com/random?fox";

  try {
    const response = await axios.get(unsplashApiUrl);

    return response.request.res.responseUrl;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

module.exports = {
  getRandomFoxImage,
};
