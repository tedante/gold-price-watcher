import axios from 'axios';
import * as cheerio from 'cheerio';

export const getGoldPrice = async () => {
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://pluang.com/widgets/price-graph/desktop-vertical",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
  })

  const $ = cheerio.load(axiosResponse.data)

  let price = $('#gold-price').text()

  let priceNumber = formatToInteger(price)

  return priceNumber
}

export const formatToInteger = (value) => {
  let result = 0

  result = value.replaceAll('Rp', '')
  result = result.replaceAll('/g', '')
  result = result.replaceAll('.', '')

  result = Number(result)

  return result
}
