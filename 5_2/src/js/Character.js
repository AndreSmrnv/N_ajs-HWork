export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.health = health || 100;
    this.level = level || 1;
    this.attack = attack || 0;
    this.defence = defence || 0;
    this.name = name;
    this.type = type;
  }

  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      throw new Error('Имя слишком короткое.');
    }
    if (value.length > 10) {
      throw new Error('Имя слишком длинное.');
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }
  set type(value) {
    switch (value) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
      default:
        throw new Error('Задан неверный тип.');
    }
    this._type = value;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += 20;
      this.defence += 20;
      this.health = 100;
    }
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    }
    
  }
}
