'use strict'

import {Rules} from '../model/modelRules';

export class Card {
  constructor(id, cardImg, cardBackColor, shirtImg, shirtBackColor) {
    const $el = this.$el = document.createElement('div');

    $el.classList.add('card');
    $el.setAttribute('data-id', id);
    $el.innerHTML = `<div class="front"></div><div class="back"></div>`;

    // front
    $el.children[0].style.background = `url(${shirtImg}) no-repeat center ${shirtBackColor}`;
    $el.children[0].style.backgroundSize = '70%';
    
    // back
    $el.children[1].style.background = `url(${cardImg}) no-repeat center ${cardBackColor}`;
    $el.children[1].style.backgroundSize = '60%';

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