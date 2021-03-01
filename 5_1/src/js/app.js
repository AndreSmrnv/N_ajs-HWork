// TODO: write your code here
export class Character {
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
};

export class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman');
  }
};
export class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman');
  }
};
export class Magician extends Character {
    constructor(name) {
      super(name, 'Magician');
    }
};
export class Undead extends Character {
    constructor(name) {
      super(name, 'Undead');
    }
};
export class Zombie extends Character {
    constructor(name) {
      super(name, 'Zombie');
    }
};
export class Daemon extends Character {
    constructor(name) {
      super(name, 'Daemon');
    }
};



// const bowman = new Bowman('worked');
// const swordsman = new Swordsman('worked2');
// console.log(bowman.attack + bowman.type);
// console.log(new Bowman('worked'));
// console.log(new Swordsman('worked'));
// // console.log(new Bowman('worked');
// // console.log(new Bowman('worked');
// // console.log(new Bowman('worked');
// // console.log(new Bowman('worked');
// console.log(`${swordsman.name}-${swordsman.type}-${swordsman.health}-${swordsman.level}-${swordsman.attack}-${swordsman.defence}`);
