'use strict'

export class StartTheGame {
  constructor() {
    this.$el = document.createElement('div');
    this.container = document.querySelector('.container');

    this.chooseTheme()
  }

  chooseTheme() {
    this.$el.classList.add('chooseTheme');
    this.$el.innerHTML = `
      <h1 class="chooseTheme__title"> Choose Theme </h1>
      <ul class="chooseTheme__list">
        <li class="chooseTheme__list__title"> Rick and Morty </li>
        <li class="chooseTheme__list__title"> Star Wars </li>
        <li class="chooseTheme__list__title"> Figure </li>
        <li class="chooseTheme__list__title"> Animal </li>
        <li class="chooseTheme__list__title"> Numeric </li>
      </ul>`

    this.container.append(this.$el);
  }
}