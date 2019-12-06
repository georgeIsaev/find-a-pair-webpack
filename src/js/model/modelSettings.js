'use strict'

import * as gameThemeJSON from './model-json/gameTheme.json'

export class Settings {
  constructor() {}

  static setGameTheme(value) {
    if (value === 'StarWars') Settings.gameTheme = gameThemeJSON.starWars;
    if (value === 'RickAndMorty') Settings.gameTheme = gameThemeJSON.rickAndMorty;
    if (value === 'Figure') Settings.gameTheme = gameThemeJSON.figure;
    if (value === 'Animal') Settings.gameTheme = gameThemeJSON.animal;
    if (value === 'Numeric') Settings.gameTheme = gameThemeJSON.numeric;
  }

}

Settings.setGameTheme('StarWars');