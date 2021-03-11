import Character from './Character';

export default class Dope extends Character {
  constructor(name, type, distance) {
    super(name, type);
    this.distance = distance || 1;
    this.stoned = false;
  }

  set stoned(value) {
    this._stoned = value;
  }
  get stoned() {
    return this._stoned;
  }  

  set attack(value) {
    this._attack = value;
  }
  get attack() {
    let attack = this._attack;
    if (this.stoned) {
        attack -= Math.floor(Math.log2(this.distance) * 5);
    } else {
        attack -= Math.floor(this._attack * ((11 - this.distance) / 10));  
    }
    return (attack > 0) ? attack : 0;
  }
}

