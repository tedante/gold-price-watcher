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
    // url: "https://www.tokopedia.com/emas/harga-hari-ini/",
    url: "https://harga-emas.org/",
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
    }
  })
  const $ = cheerio.load(axiosResponse.data)
  // const htmlElement = $("#gold-price").text()
  console.log($('#container > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td:nth-child(10)').text(), ">>>>?");
  // console.log($.html(), ">>>>?");

  return "200000"
}

export default getGoldPrice