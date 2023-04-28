import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import * as config from "#config/app";
import axios from "axios";

// dependent on utc plugin
dayjs.extend(utc)
dayjs.extend(timezone)

export const checkGoldPrice = async (requestBody) => {
  const { data } = await axios({
    method: "PUT",
    url: ``,
    headers: {
      Authorization: ``,
    },
  });
}