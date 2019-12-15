'use strict'

export class StartTheGame {
  constructor() {}

  static chooseTheme($el, container) {
    $el.innerHTML = `
      <h1 class="chooseTheme__title"> Choose Theme </h1>
      <ul class="chooseTheme__list">
        <li class="chooseTheme__list__title _rickAndMorty"> Rick and Morty </li>
        <li class="chooseTheme__list__title _starWars"> Star Wars </li>
        <li class="chooseTheme__list__title _numeric"> Numeric </li>
        <li class="chooseTheme__list__title _animal"> Animal </li>
        <li class="chooseTheme__list__title _figure"> Figure </li>
      </ul>`

    container.append($el);
  }

  static enterName($el, container) {
    $el.innerHTML = `
      <form class="enter-name">
        <label for="name" class="enter-name__label"> Enter Your name </label>
        <input id="name" class="enter-name__input" type="text" value="NoName" autocomplete="off" spellcheck="false">
        <input class="enter-name__button" type="submit" value="Enter"> 
      </form>`

    container.append($el);
  }
}


const start = new StartTheGame();