import { createStore } from "redux";

const SEARCH_ID = "searchId";
const TICKETS_INFO = "ticketsInfo";
const TRANSFERS_FILTER = "transfersFilter";

function reducer(
  state = {
    searchId: [],
    ticketsInfo: [],
    transfersFilter: [],
  },
  action
) {
  switch (action.type) {
    case SEARCH_ID: {
      return { ...state, searchId: action.payload };
    }
    case TICKETS_INFO: {
      return { ...state, ticketsInfo: action.payload };
    }

    case TRANSFERS_FILTER: {
      const addedFilter = state.transfersFilter.find(
        (transfer) => transfer === action.payload
      );
      if (!addedFilter) {
        return {
          ...state,
          transfersFilter: [...state.transfersFilter, action.payload],
        };
      }
      return {
        ...state,
        transfersFilter: state.transfersFilter.filter(
          (transfer) => transfer !== action.payload
        ),
      };
    }
    default:
      return state;
  }
}

export function getSearchId(payload) {
  return { type: SEARCH_ID, payload };
}
export function getTicketsInfo(payload) {
  return { type: TICKETS_INFO, payload };
}

export function getTransfersInfo(payload) {
  return { type: TRANSFERS_FILTER, payload };
}

const store = createStore(reducer);
export default store;
