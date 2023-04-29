import { getGoldPrice } from "./getGoldPrice.js";
import { TARGET_PRICE } from "#config/general";

export const checkGoldPrice = async () => {
  const currentPrice = await getGoldPrice()

  let targetPrice = TARGET_PRICE

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