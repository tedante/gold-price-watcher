import { goldPrice } from "#modules/goldPrice";

const testgoldPrice = async () => {
  let data = await goldPrice()

  if (data) return true

  return false
}

console.log(`TEST goldPrice`, await testgoldPrice());