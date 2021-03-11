// import {
//   Team,
// } from '../app';

import Daemon from '../Daemon';

test('check Dope for distance 1', () => {
  const person = new Daemon('tstPerson');
  person.distance = 2;
  expect(person.attack).toBe(1);
});

test('check Dope for distance 5', () => {
  const person = new Daemon('tstPerson');
  person.distance = 5;
  expect(person.attack).toBe(4);
});

test('check Dope for distance 11', () => {
  const person = new Daemon('tstPerson');
  person.distance = 11;
  expect(person.attack).toBe(10);
});

test('check Dope for atack 0', () => {
  const person = new Daemon('tstPerson');
  person.attack = 0;
  expect(person.attack).toBe(0);
});

test('check Dope for .stoned = true', () => {
  const person = new Daemon('tstPerson');
  person.stoned = true;
  expect(person.stoned).toBe(true);
});

test('check Dope for attack = 100 and stoned ', () => {
  const person = new Daemon('tstPerson');
  person.attack = 100;
  person.distance = 11;
  person.stoned = true;
  expect(person.attack).toBe(83);
});
