const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {

    if (error) {
      return callback(error, null);
    }


    const data = (JSON.parse(body))[0];

    if (data === undefined) {
      return callback(null, 'Breed not found');
    } else {
      return callback(null, data.description);
    }


  });
};

module.exports = { fetchBreedDescription };