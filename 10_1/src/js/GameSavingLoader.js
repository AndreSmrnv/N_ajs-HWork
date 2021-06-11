import json from './Parser.js';
import read from './Reader.js';

class GameSavingLoader {
  static load() {
    return read().then(json);
  }
}

export default GameSavingLoader;