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

  static addScore() {
    Settings.loadScoreTable();

    Settings.scoreTable.push({user: Settings.userName, time: Settings.result});
    Settings.scoreTable.sort((a, b) => {
      if (a != null && b != null) {
        return a.time - b.time;
      }
    });

    if (Settings.scoreTable.length > 10) Settings.scoreTable.length = 10;

    Settings.saveScoreTable();
  }

  static saveScoreTable() {
    let scoreTableJSON = JSON.stringify(Settings.scoreTable);
    localStorage.setItem('scoreTable', scoreTableJSON);
  }

  static loadScoreTable() {
    if (!localStorage.getItem('scoreTable')) return;
    let pars = JSON.parse(localStorage.getItem('scoreTable'));
    Settings.scoreTable = pars;
  }
}

Settings.scoreTable = [];