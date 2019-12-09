'use strict'

import * as gameThemeJSON from './model-json/gameTheme.json'

export class Settings {
  constructor() {}

  static setGameTheme(value) {
    if (value === '_starWars') Settings.gameTheme = {theme: '_starWars', cardsImg: gameThemeJSON.starWars};
    if (value === '_rickAndMorty') Settings.gameTheme = {theme: '_rickAndMorty', cardsImg: gameThemeJSON.rickAndMorty};
    if (value === '_figure') Settings.gameTheme = {theme: '_figure', cardsImg: gameThemeJSON.figure};
    if (value === '_animal') Settings.gameTheme = {theme: '_animal', cardsImg: gameThemeJSON.animal};
    if (value === '_numeric') Settings.gameTheme = {theme: '_numeric', cardsImg: gameThemeJSON.numeric};
  }
}