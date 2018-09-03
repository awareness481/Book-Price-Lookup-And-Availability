import React from 'react';
import { render } from 'react-dom';

import styles from './styles/_styles.scss';

import fetchResult from './components/fetchResult';

if (module.hot) {
  module.hot.accept();
}

const handleSubmit = (e) => (
  render(fetchResult(e.target.children[0].value))
);



const MainApp = (props) => (
  <form className='mainForm' onSubmit={handleSubmit}>
    <input 
      id='searchForm'
      value={props.Input}
    />
  </form>
);

// render the app
render(<MainApp />, document.getElementById('app'));