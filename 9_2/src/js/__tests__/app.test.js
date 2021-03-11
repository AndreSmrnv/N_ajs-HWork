import {
  ArrayBufferConverter,
} from '../app';

test('Load String', () => {
  const arrBuffer = new ArrayBufferConverter();
  arrBuffer.load('tstString');
  expect(arrBuffer.toString()).toBe('tstString');
});

test('Load Obj', () => {
  const arrBuffer = new ArrayBufferConverter();
  arrBuffer.load('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
  expect(arrBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
