'use strict'

// class UserSettings {
//   constructor(userTheme = 'StarWars', gameDifficulty = 'medium', userCount = 1, usersName = 'NoName') {
//     this.theme = userTheme;
//     this.difficulty = gameDifficulty;
//     this.users = userCount;
//     this.usersName = usersName;
//   }
// }

import {Settings} from '../model/modelSettings';
import {PlayingField} from '../view/viewPlayingField';
import {StartTheGame} from '../view/viewStartTheGame';

class UserSettings {
  constructor() {
    this.$el = document.createElement('div');
    this.container = document.querySelector('.container');

    this.setTheme()
  }

  setTheme() {
    StartTheGame.chooseTheme(this.$el, this.container);
    const chooseThemeListTitle = document.querySelectorAll('.chooseTheme__list__title');
    
    chooseThemeListTitle.forEach(item => {
      item.addEventListener('click', x => {
        UserSettings.theme = item.classList[1];
        
        Settings.setGameTheme(UserSettings.theme);
        this.container.innerHTML = '';

        return new PlayingField()
      })
    })
  }

  setUserName() {
    StartTheGame.enterName(this.$el, this.container);

  }
}
new UserSettings()