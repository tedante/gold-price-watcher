import { checkGoldPrice } from "./checkGoldPrice.js";
import { EMAIL_USER, EMAIL_PASSWORD, EMAIL_SERVICE } from "#config/general";
import nodemailer from "nodemailer"

export const goldPrice = async () => {
  let objGoldPrice = await checkGoldPrice()

  try {
    if (objGoldPrice.status) {
      await sendEmail({
        targetPrice: objGoldPrice.targetPrice,
        currentPrice: objGoldPrice.currentPrice,
      })
    }
    return true
  } catch (error) {
    return false
  }
}

export const sendEmail = async (data) => {
  let transport = {
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
    service: EMAIL_SERVICE,
  }

  let transporter = nodemailer.createTransport(transport)

  await transporter.sendMail({
    from: EMAIL_USER,
    to: EMAIL_USER,
    subject: 'Gold Price Hit Target',
    text: `Gold price hit the target(Rp. ${data.targetPrice}), current price Rp. ${data.currentPrice}`
  })
}