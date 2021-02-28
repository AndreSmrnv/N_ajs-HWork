import { getLegend } from './app';

const userHealth = [
  { name: 'Маг', health: 5 }, // 0
  { name: 'Маг', health: 15 }, // 1
  { name: 'Маг', health: 30 }, // 2
  { name: 'Маг', health: 50 }, // 3
  { name: 'Маг', health: 90 }, // 4
];
test('legend critical', () => {
  const legendHealth = getLegend(userHealth[0]);
  expect(legendHealth).toBe('critical');
});

test('legend wounded', () => {
  let legendHealth = getLegend(userHealth[1]);
  expect(legendHealth).toBe('wounded');
  legendHealth = getLegend(userHealth[2]);
  expect(legendHealth).toBe('wounded');
  legendHealth = getLegend(userHealth[3]);
  expect(legendHealth).toBe('wounded');
});

test('legend healthy', () => {
  const legendHealth = getLegend(userHealth[4]);
  expect(legendHealth).toBe('healthy');
});
