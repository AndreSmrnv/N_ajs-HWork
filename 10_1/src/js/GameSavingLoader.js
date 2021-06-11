import json from './parser';
import read from './reader';

class GameSavingLoader {
  static load() {
    return read().then(json);
  }
}

export default GameSavingLoader;
