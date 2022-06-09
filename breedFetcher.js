const args = process.argv.slice(2);
const request = require('request');

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  if (error) {
    console.log(error);
  }

  const data = (JSON.parse(body))[0];

  if (data === undefined) {
    console.log('Breed name not found');
  } else {
    console.log(data.description);
  }
});