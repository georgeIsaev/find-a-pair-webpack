'use strict'

import {Rules} from '../model/modelRules';

export class Timer {
  constructor() {
    this.$el = document.createElement('div');
    this.parentEl = document.querySelector('.playing-field');

    this.$el.classList.add('timer');
    this.$el.innerHTML = 
      `<span class="timer__min">00.</span>
      <span class="timer__sec">00.</span>
      <span class="timer__mil-sec">00</span>`;

    this.parentEl.append(this.$el);
    setTimeout(Rules.getTime, 4000);
  }
}