import React from 'react';
import { render } from 'react-dom';
import styles from './styles/_styles.scss';

if (module.hot) {
  module.hot.accept();
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(e.target.children[0].value);
}

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