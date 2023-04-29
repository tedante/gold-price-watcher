import { checkGoldPrice } from "#modules/checkGoldPrice";

const testCheckGoldPrice = async () => {
  let data = await checkGoldPrice()

  if (data.status) return true

  return false
}

console.log(`TEST checkGoldPrice`, await testCheckGoldPrice());