'use strict'

import {Rules} from '../model/modelRules';

export class Card {
  constructor(id, theme, cardImg) {
    const $el = this.$el = document.createElement('div');

    $el.classList.add('card');
    $el.setAttribute('data-id', id);
    $el.innerHTML = `<div class="front"></div><div class="back"></div>`;
    $el.classList.add(theme);
    $el.children[1].style.backgroundImage = `url(${cardImg})`;

    this.flip();
  }

  flip() {
    this.$el.addEventListener('click', function(x) {
      if(this.classList.contains('flip')) return;

      this.classList.toggle('flip');

      return new Rules();
    })
  }
}