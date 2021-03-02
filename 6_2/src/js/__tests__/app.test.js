import {
  getAvailSpetial
} from '../app';

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон'
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...'
      // <- обратите внимание, описание "засекречено"
    }
  ]
};
// getAvailSpetial(character);

test('getAvailSpetial default', () => {
  const result = getAvailSpetial(character)[1];
  const exp = 'Описание недоступно';
  expect(result.description).toEqual(exp);
});

test('getAvailSpetial eqElements Array', () => {
  const result = getAvailSpetial(character).length;
  const exp = 2;
  expect(result).toBe(exp);
});

test('getAvailSpetial eqKeys Array elem 0', () => {
  const result = Object.keys(getAvailSpetial(character)[0]).length;
  const exp = 4;
  expect(result).toBe(exp);
});
test('getAvailSpetial eqKeys Array elem 1', () => {
  const result = Object.keys(getAvailSpetial(character)[1]).length;
  const exp = 4;
  expect(result).toBe(exp);
});

