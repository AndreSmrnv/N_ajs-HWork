import json from './Parser';
import read from './Reader';

class GameSavingLoader {
  static load() {
    return read().then(json);
  }
}

export default GameSavingLoader;
