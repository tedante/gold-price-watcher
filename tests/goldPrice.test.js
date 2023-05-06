import { goldPrice } from "#modules/goldPrice";
import { expect, test } from '@jest/globals';

describe('goldPrice module', () => {
  test(`should have a truthy value`, async () => {
    let data = await goldPrice()

    expect(data).toBeTruthy();
  });
});