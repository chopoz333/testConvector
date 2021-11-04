import axios from "axios";

export const getExchangeRates = async () => {
  const response = await axios.get(`https://www.cbr-xml-daily.ru/daily_json.js`)
  return response.data;
}