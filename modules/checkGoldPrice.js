export const checkGoldPrice = (currentPrice, targetPrice) => {
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