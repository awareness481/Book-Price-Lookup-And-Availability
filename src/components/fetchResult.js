import React from 'react';
import { Route, Redirect } from 'react-router'

const Result = (id) => (
  fetch('http://localhost:3000/api/searchResults:' + id)
    .then(data => console.log(data))
)

export default Result;