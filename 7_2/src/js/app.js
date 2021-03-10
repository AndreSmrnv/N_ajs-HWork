// TODO: write your code here



export class ErrorRepository {
  constructor() {
    this.errors = new Map();
    this.init();
  }

  translate(code) {
    return this.errors.get(code) || 'Unknown error';
  }

  init() {
    this.errors.set(1, 'Имя слишком длинное.');
    this.errors.set(2, 'Имя слишком короткое.');
    this.errors.set(3, 'Задан неверный тип.');
  }
}


console.log('worked');
