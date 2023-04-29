import { getGoldPrice } from "./getGoldPrice.js";
import * as data from "../data/target-price.json" assert {
  type: 'json',
  integrity: 'sha384-ABC123'
};

export const checkGoldPrice = async () => {
  const currentPrice = await getGoldPrice()

  let targetPrice = data.default.target_price

  if (currentPrice <= targetPrice) return {
    status: true,
    targetPrice,
    currentPrice
  }

  return {
    status: false,
    targetPrice,
    currentPrice
  }
}