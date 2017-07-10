import React, { Component } from 'react';

import styles from './style.scss';

export default class Demo extends Component {
  render() {
    return (
      <div className={ styles.demo }>
        { `CSS-module loaded style` }
      </div>
    );
  }
}
