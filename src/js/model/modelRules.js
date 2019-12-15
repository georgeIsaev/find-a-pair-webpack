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
      document.querySelector('.container').innerHTML = 
        `<div class="congrat">
          <h1 class="congrat__title"> Победа! </h1>
        </div>`;
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

  static getTime() {
    let time = new Date();
    const timerMin = document.querySelector('.timer__min');
    const timerSec = document.querySelector('.timer__sec');
    const timerMilSec = document.querySelector('.timer__mil-sec');

    // Time dropping
    time.setHours(0);
    time.setMinutes(0);
    time.setSeconds(0);
    time.setMilliseconds(0);

    function stopwatch(t) {
      let min = 0;
      let sec = 0;
      let milSec = 0;

      setTimeout(() => {
        t.setMilliseconds(t.getMilliseconds() + 10);

        min = (t.getMinutes() < 10) ? 
          String('0' +  t.getMinutes()) :
          String(t.getMinutes());
        timerMin.textContent = `${min}.`;

        sec = (t.getSeconds() < 10) ? 
          String('0' +  t.getSeconds()) :
          String(t.getSeconds());
        timerSec.textContent = `${sec}.`;

        milSec = (t.getMilliseconds() < 100) ? 
          String('0' +  t.getMilliseconds()).slice(0, 2) :
          String(t.getMilliseconds()).slice(0, 2);
        timerMilSec.textContent = milSec;

        if (document.querySelector('.congrat')) return
        
        stopwatch(t);
        
      }, 10);
    }

    stopwatch(time);
  }
}