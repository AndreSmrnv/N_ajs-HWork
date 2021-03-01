import { Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../app';

test('Character name lenght 1', () => {
    const result = new Character('test', 'Bowman');
    expect(() => { result.name = '1'}).toThrow(Error); 
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
    expect(() => { result.name = '11111111111'}).toThrow(Error);
});
test('Character health', () => {
    const result = new Character('test', 'Bowman');      
    expect(result.health).toBe(100);
});
test('Character level', () => {
    const result = new Character('test', 'Bowman');      
    expect(result.level).toBe(1);
});
  
test('Bowman attack', () => {
    const result = new Bowman('test', 'Bowman');
    expect(result.attack).toBe(25);
}); 
test('Bowman defence', () => {
    const result = new Bowman('test', 'Bowman');
    expect(result.defence).toBe(25);
});  
test('Swordsman attack', () => {
    const result = new Swordsman('test', 'Bowman');
    expect(result.attack).toBe(40);
}); 
test('Swordsman defence', () => {
    const result = new Swordsman('test', 'Bowman');
    expect(result.defence).toBe(10);
});     
test('Magician attack', () => {
    const result = new Magician('test', 'Bowman');
    expect(result.attack).toBe(10);
}); 
test('Magician defence', () => {
    const result = new Magician('test', 'Bowman');
    expect(result.defence).toBe(40);
});
test('Undead attack', () => {
    const result = new Undead('test', 'Bowman');
    expect(result.attack).toBe(25);
}); 
test('Undead defence', () => {
    const result = new Undead('test', 'Bowman');
    expect(result.defence).toBe(25);
});  
test('Zombie attack', () => {
    const result = new Zombie('test', 'Bowman');
    expect(result.attack).toBe(40);
}); 
test('Zombie defence', () => {
    const result = new Zombie('test', 'Bowman');
    expect(result.defence).toBe(10);
});     
test('Daemon attack', () => {
    const result = new Daemon('test', 'Bowman');
    expect(result.attack).toBe(10);
}); 
test('Daemon defence', () => {
    const result = new Daemon('test', 'Bowman');
    expect(result.defence).toBe(40);
});                