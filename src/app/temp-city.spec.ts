import { TempCity } from './temp-city';

describe('TempCity', () => {
  it('should create an instance', () => {
    expect(new TempCity("Napoli","12")).toBeTruthy();
  });
});
