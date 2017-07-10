import React, { Component } from 'react';

import styles from './style.scss';
import stylesStylus from './style.styl';

export default class Demo extends Component {
  render() {
    return (
      <div className={ styles.demo }>
        { `CSS-module loaded style` }

        <div className={ stylesStylus.demo }>
          styl
        </div>
      </div>
    );
  }
}
