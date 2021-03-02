// TODO: write your code here

const character = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export function getAvailSpetial(arrCharacter) {
  const arrAvailSpetial = [];
  arrCharacter.special.forEach((item) => {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = item;
    arrAvailSpetial.push(
      {
        id, name, icon, description,
      },
    );
  });
  return arrAvailSpetial;
}

console.log(getAvailSpetial(character));

console.log('worked');
