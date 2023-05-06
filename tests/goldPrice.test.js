import { getGoldPrice, formatToInteger } from "#modules/getGoldPrice";
import { checkGoldPrice } from "#modules/checkGoldPrice";
import { expect, test } from '@jest/globals';

describe('getGoldPrice module', () => {
  test(`should have a integer value`, async () => {
    let value = "Rp1.012.344/g"
    let data = formatToInteger(value)

    expect(data).toBeGreaterThanOrEqual(0);
  });

  test(`should have a truthy value`, async () => {
    let data = await getGoldPrice()

    expect(data).toBeTruthy();
  });
});

describe('checkGoldPrice module', () => {
  test(`should have a false status`, async () => {
    let data = checkGoldPrice(1_000_000, 900_000)

    expect(data.status).toBeFalsy();
  });

  test(`should have a true status`, async () => {
    let data = checkGoldPrice(800_000, 900_000)

    expect(data.status).toBeTruthy();
  });
});