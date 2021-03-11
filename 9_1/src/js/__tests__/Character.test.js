import Character from '../Character';

test('Character name lenght 1', () => {
  const result = new Character('test', 'Bowman');
  expect(() => { result.name = '1'; }).toThrow(Error);
});
test('Character name lenght 2', () => {
  const result = new Character('22', 'Bowman');
  expect(result.name).toBe('22');
});
test('Character name lenght 10', () => {
  const result = new Character('1010101010', 'Bowman');
  expect(result.name).toBe('1010101010');
});
test('Character name lenght 11', () => {
  const result = new Character('test', 'Bowman');
  expect(() => { result.name = '11111111111'; }).toThrow(Error);
});
test('Character health', () => {
  const result = new Character('test', 'Bowman');
  expect(result.health).toBe(100);
});
test('Character level', () => {
  const result = new Character('test', 'Bowman');
  expect(result.level).toBe(1);
});
test('Character not correct Type', () => {
  const result = new Character('test', 'Bowman');
  expect(() => { result.type = 'bad'; }).toThrow(Error);
});
test('Character name get', () => {
  const result = new Character('1010101010', 'Bowman');
  expect(result._name).toBe('1010101010');
});
test('Character type get Swordsman', () => {
  const result = new Character('1010101010', 'Swordsman');
  const exp = result._type;
  expect(result.type).toBe(exp);
});
test('Character type get Magician', () => {
  const result = new Character('1010101010', 'Magician');
  const exp = result._type;
  expect(result.type).toBe(exp);
});
test('Character type get Undead', () => {
  const result = new Character('1010101010', 'Undead');
  const exp = result._type;
  expect(result.type).toBe(exp);
});
test('Character type get Zombie', () => {
  const result = new Character('1010101010', 'Zombie');
  const exp = result._type;
  expect(result.type).toBe(exp);
});
test('Character type get Daemon', () => {
  const result = new Character('1010101010', 'Daemon');
  const exp = result._type;
  expect(result.type).toBe(exp);
});
