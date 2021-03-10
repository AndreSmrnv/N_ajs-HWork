import {
  ErrorRepository,
} from '../app';

test('translate error code #2', () => {
  const err = new ErrorRepository();
  expect(err.translate(2))
    .toBe('Имя слишком короткое.');
});

test('Unknown error code #4', () => {
  const err = new ErrorRepository();
  expect(err.translate(4))
    .toBe('Unknown error');
});
