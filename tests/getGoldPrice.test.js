import getGoldPrice from "#modules/getGoldPrice";

const testGetGoldPrice = async () => {
  let data = await getGoldPrice()
  console.log(data)
  if (typeof (data) == "number") return true

  return false
}

console.log(`TEST getGoldPrice`, await testGetGoldPrice());