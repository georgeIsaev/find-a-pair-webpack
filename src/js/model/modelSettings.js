'use strict'

import * as gameThemeJSON from './model-json/gameTheme.json'

export class Settings {
  constructor() {}

  static setGameTheme(value) {
    const theme = value;
    const playingField = document.querySelector('.playing-field');
    
    Settings.gameTheme = {theme: theme, cardsImg: gameThemeJSON.default[theme]};
    playingField.classList.add(theme);
  }
}