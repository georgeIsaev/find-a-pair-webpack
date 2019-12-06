'use strict'

import {Rules} from '../model/modelRules';
import {Settings} from '../model/modelSettings';
import {Card} from './viewCard';


export class PlayingField {
  constructor() {
    this.container = document.querySelector('.container');
    this.gameTheme = Settings.gameTheme;

    this.addShuffleCards(16, this.gameTheme.cardsImg, this.gameTheme.cardsBackColor, this.gameTheme.cardsShirtImg, this.gameTheme.cardsShirtBackColor);
    Rules.preview();
    this.setContainerWidth();
  }

  addShuffleCards(cardsCount, cardImg, cardBackColor, shirtImg, shirtBackColor) {
    const cards = new Array();
    
    for (let i = 0; i < cardsCount / 2; i++) {
      let card = new Card(i, cardImg[i], cardBackColor, shirtImg, shirtBackColor);
      let cardCopy = new Card(i, cardImg[i], cardBackColor, shirtImg, shirtBackColor);

      cards.push(card.$el);
      cards.push(cardCopy.$el);
    }

    // Shuffle cards
    cards.sort((a,b) => Math.random() - 0.5)
      .forEach(card => this.container.append(card));
  }
  
  setContainerWidth() {
    let cardMarginBottom = parseFloat(getComputedStyle(document.querySelector('.card')).marginBottom);
    let cardWidth = parseFloat(getComputedStyle(document.querySelector('.card')).width);

    this.container.style.width = `${(cardWidth * 4) + (cardMarginBottom * 3)}px`;
  }
}
