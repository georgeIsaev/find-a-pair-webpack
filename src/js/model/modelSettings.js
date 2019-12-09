'use strict'

import * as gameThemeJSON from './model-json/gameTheme.json'

export class Settings {
  constructor() {}

  static setGameTheme(value) {
    if (value === 'StarWars') Settings.gameTheme = {theme: '_starWars', cardsImg: gameThemeJSON.starWars};
    if (value === 'RickAndMorty') Settings.gameTheme = {theme: '_rickAndMorty', cardsImg: gameThemeJSON.starWars};
    if (value === 'Figure') Settings.gameTheme = {theme: '_figure', cardsImg: gameThemeJSON.starWars};
    if (value === 'Animal') Settings.gameTheme = {theme: '_animal', cardsImg: gameThemeJSON.starWars};
    if (value === 'Numeric') Settings.gameTheme = {theme: '_numeric', cardsImg: gameThemeJSON.starWars};
  }

}

Settings.setGameTheme('StarWars');