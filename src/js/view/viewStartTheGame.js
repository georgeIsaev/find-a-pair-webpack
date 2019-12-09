'use strict'

export class StartTheGame {
  constructor() {}

  static chooseTheme($el, container) {
    $el.classList.add('chooseTheme');
    $el.innerHTML = `
      <h1 class="chooseTheme__title"> Choose Theme </h1>
      <ul class="chooseTheme__list">
        <li class="chooseTheme__list__title _rickAndMorty"> Rick and Morty </li>
        <li class="chooseTheme__list__title _starWars"> Star Wars </li>
        <li class="chooseTheme__list__title _figure"> Figure </li>
        <li class="chooseTheme__list__title _animal"> Animal </li>
        <li class="chooseTheme__list__title _numeric"> Numeric </li>
      </ul>`

    container.append($el);
  }

  static enterName($el, container) {
    $el.classList.add('enterName');
    $el.innerHTML = `
      <h1 class="chooseTheme__title"> Choose Theme </h1>
      <ul class="chooseTheme__list">
        <li class="chooseTheme__list__title _rickAndMorty"> Rick and Morty </li>
        <li class="chooseTheme__list__title _starWars"> Star Wars </li>
        <li class="chooseTheme__list__title _figure"> Figure </li>
        <li class="chooseTheme__list__title _animal"> Animal </li>
        <li class="chooseTheme__list__title _numeric"> Numeric </li>
      </ul>`

    container.append($el);
  }
}