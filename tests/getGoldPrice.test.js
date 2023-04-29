import { getGoldPrice, formatToInteger } from "#modules/getGoldPrice";

const testGetGoldPrice = async () => {
  let data = await getGoldPrice()

  if (data) return true

  return false
}

const testFormatToInteger = () => {
  let value = "Rp1.012.344/g"
  let data = formatToInteger(value)

  if (typeof (data) == "number") return true

  return false
}

console.log(`TEST getGoldPrice`, await testGetGoldPrice());
console.log(`TEST FormatToInteger`, testFormatToInteger());