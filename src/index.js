import React from 'react';
import { render } from 'react-dom';
import styles from './styles/_styles.scss';

if (module.hot) {
  module.hot.accept();
}
const MainApp = () => (
  <form class='mainForm'>
    <input id='searchForm' />
  </form>
);
// render the app
render(<MainApp />, document.getElementById('app'));