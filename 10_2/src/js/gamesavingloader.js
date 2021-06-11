import json from './parser';
import read from './reader';

class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      return await json(data);
    } catch (err) {
      return err;
    }
  }
}

export default GameSavingLoader;
