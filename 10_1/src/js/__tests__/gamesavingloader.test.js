/* eslint-disable max-len */
import GameSavingLoader from '../GameSavingLoader';

it('Check read data {...}', async () => {
  const dataCheck = '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}';
  const data = await GameSavingLoader.load();
  expect(data).toEqual(dataCheck);
});
