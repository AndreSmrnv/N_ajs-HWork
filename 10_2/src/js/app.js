// TODO: write your code here

import GameSavingLoader from './gamesavingloader';

const loadSaving = async () => {
  const saving = await GameSavingLoader.load();
  console.log(saving);
};

  loadSaving();


console.log('worked');
