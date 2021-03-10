// TODO: write your code here

// import Character from './Character';

export class Team {
  constructor() {
    this.members = new Set();
  }

  add(gamerObj) {
    if (this.members.has(gamerObj)) {
      throw new Error('Игрок уже в команде. Повторное добавление невозможно');
    }
    this.members.add(gamerObj);
  }

  addAll(...gamersObj) {
    gamersObj.forEach((gamerObj) => { this.members.add(gamerObj); });
  }

  toArray() {
    return [...this.members.values()];
  }
}

console.log('worked');
