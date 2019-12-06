'use strict'

export class Rules {
  constructor() {
    this.cardsFlip = document.querySelectorAll('.flip');

    if (this.cardsFlip.length === 2) {

      Rules.canTouch('none');

      if (this.cardsFlip[0].getAttribute('data-id') !== this.cardsFlip[1].getAttribute('data-id')) {
        setTimeout(Rules.unFlip, 1000, this.cardsFlip);
      } else {
        setTimeout(Rules.find, 1000, this.cardsFlip);
      }

      setTimeout(Rules.canTouch, 1000, '');
    }
  }

  static unFlip(cards) {
    cards.forEach(card => card.classList.toggle('flip'));
  }

  static canTouch(value) {
    document.querySelectorAll('.card').forEach(card => card.style.pointerEvents = value);
  }
  
  static find(cards) {
    cards.forEach(card => {
      card.classList.toggle('flip');
      card.classList.add('found');
      card.children[0].style.background = '';
      card.children[1].style.background = '';
      card.style.pointerEvents = 'none';

      Rules.congratulation();
    });
  }

  static congratulation() {
    if (document.querySelectorAll('.found').length == document.querySelectorAll('.card').length) {
      document.querySelector('.container').innerHTML = '<h1> Победа! </h1>';
    }
  }

  static preview() {
    document.querySelectorAll('.card')
      .forEach(card => {
        setTimeout(() => {
          card.classList.toggle('flip');
          card.style.pointerEvents = 'none';
        }, 1000);
    
        setTimeout(() => {
          card.classList.toggle('flip');
          card.style.pointerEvents = '';
        }, 3000);
      })
  }
}