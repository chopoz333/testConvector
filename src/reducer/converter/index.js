import {
  GET_EXCHANGE_RATE_START,
  GET_EXCHANGE_RATE_SUCCESS,
  GET_EXCHANGE_RATE_ERROR,
} from "./constants";

const defaultState = {
  rates: {
    data: [],
    loading: false,
    error: false,
  },
};

export default function exchangeRates(state = defaultState, action) {
  switch (action.type) {
    case GET_EXCHANGE_RATE_START: {
      return {
        ...state,
        rates: {
          data: [],
          isLoading: true,
          error: false
        },
      };
    }
    case GET_EXCHANGE_RATE_SUCCESS: {
      return {
        ...state,
        rates: {
          data: action.payload,
          isLoading: false,
          error: false
        },
      };
    }
    case GET_EXCHANGE_RATE_ERROR: {
      return {
        ...state,
        rates: {
          data: action.payload,
          isLoading: false,
          error: true
        },
      };
    }
    default: return state;
  }
};