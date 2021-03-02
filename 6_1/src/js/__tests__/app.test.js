import {
  orderByProps,
} from '../app';

const obj = {
  name: 'мечник', health: 10, level: 2, attack: 80, defence: 40, default: '',
};
// orderByProps(obj, ["name", "level", "defence"]);
test('orderByProps order 1 key default value', () => {
  const result = orderByProps(obj, ['default']);
  expect(result[0].value).toBe('-');
});
test('orderByProps order 1 key ', () => {
  const result = orderByProps(obj, ['name']);
  expect(result[0].key).toBe('name');
});
test('orderByProps order 1 value ', () => {
  const result = orderByProps(obj, ['name']);
  expect(result[0].value).toBe('мечник');
});
test('orderByProps order 2 check sort ', () => {
  const result = [];
  orderByProps(obj, ['name', 'level']).forEach((item) => { result.push(item.key); });
  const exp = ['name', 'level', 'attack', 'default', 'defence', 'health'];
  expect(result).toEqual(exp);
});

test('orderByProps order 2 key', () => {
  const result = orderByProps(obj, ['name', 'level']);
  expect(result[1].key).toBe('level');
});
test('orderByProps order 2 value ', () => {
  const result = orderByProps(obj, ['name', 'level']);
  expect(result[1].value).toBe(2);
});
test('orderByProps order 3 key', () => {
  const result = orderByProps(obj, ['name', 'level', 'defence']);
  expect(result[2].key).toBe('defence');
});
test('orderByProps order 3 value ', () => {
  const result = orderByProps(obj, ['name', 'level', 'defence']);
  expect(result[2].value).toBe(40);
});
