import { createStore } from "redux";

const SEARCH_ID = "searchId";
const TICKETS_INFO = "ticketsInfo";

function reducer(state = { searchId: [], ticketsInfo: [] }, action) {
  switch (action.type) {
    case SEARCH_ID: {
      return { ...state, searchId: action.payload };
    }
    case TICKETS_INFO: {
      return { ...state, ticketsInfo: action.payload };
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

const store = createStore(reducer);
export default store;
