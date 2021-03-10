import {
  Validator,
} from '../app';

test('Valid NickName', () => {
  expect(Validator.validateUsername('nick11_-31Saaaa')).toBe(
    true,
  );
});

test('check false  more 3 numbers', () => {
  expect(Validator.validateUsername('nick1131Saaa')).toBe(
    false,
  );
});

test('check false start from a number', () => {
  expect(Validator.validateUsername('1aaa1131aaaa')).toBe(
    false,
  );
});

test('check false end with _', () => {
  expect(Validator.validateUsername('aaa1131aaaa_')).toBe(
    false,
  );
});
