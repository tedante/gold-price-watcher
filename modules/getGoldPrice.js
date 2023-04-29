import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import axios from 'axios';
import * as cheerio from 'cheerio';

// dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

export const getGoldPrice = async (requestBody) => {
  const axiosResponse = await axios.request({
    method: "GET",
    url: "https://pluang.com/widgets/price-graph/desktop-vertical",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
  })

  const $ = cheerio.load(axiosResponse.data)

  let price = $('#gold-price').text()

  return price
}

export const formatToInteger = (value) => {
  let result = 0

  result = value.replaceAll('Rp', '')
  result = result.replaceAll('/g', '')
  result = result.replaceAll('.', '')

  result = Number(result)

  return result
}
