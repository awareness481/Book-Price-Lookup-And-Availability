require('isomorphic-fetch');
require('dotenv').config();

const searchResults = (query) => {
  const key = process.env.API_KEY;
  const url = 'https://www.goodreads.com/search/index.xml?key=';

  const init = {
    mode: 'cors',
  }

  const test = query.substring(1);
  const req = `${url}${key}&q=${test}`;

  return fetch(req, init)
    .then(res => res.text())
    .then(text => console.log(text));
};

export default searchResults;