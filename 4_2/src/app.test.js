import { sortMatchers } from './app';

const arrIn = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('sortMatchers not.toBe', () => {
  const sortArray = sortMatchers(arrIn);
  const resultArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortArray).not.toBe(resultArr);
});
test('sortMatchers toEqual', () => {
  const sortArray = sortMatchers(arrIn);
  const resultArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  expect(sortArray).toEqual(resultArr);
});
