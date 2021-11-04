import {
  GET_EXCHANGE_RATE_START,
  GET_EXCHANGE_RATE_SUCCESS,
  GET_EXCHANGE_RATE_ERROR,
} from "./constants";

import { getExchangeRates } from "../../service/converter";

export const getRate = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_EXCHANGE_RATE_START,
    })
    const data = await getExchangeRates();

    dispatch({
      type: GET_EXCHANGE_RATE_SUCCESS,
      payload: data.Valute,
    })
  } catch (err) {
    dispatch({
      type: GET_EXCHANGE_RATE_ERROR,
      payload: err,
    })
  }
};