import { sortMatchers } from './app';

const arrIn = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

test('sortMatchers', () => {
  const sortArray = sortMatchers(arrIn);
  const resultArr = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  //expect(sortArray).toBe(resultArr);
  expect(sortArray).toEqual(resultArr);
});
