import { combineReducers } from "redux";
import ticketListReducer from "./ticketList.reducer";
import statusListReducer from "./statusList.reducer";
import statusByIdListReducer from "./statusByIdList.reducer";
import ticketCreateReducer from "./ticketCreate.reducer";
import ticketEditReducer from "./ticketEdit.reducer";

export default combineReducers({
  ticketListReducer,
  statusListReducer,
  statusByIdListReducer,
  ticketCreateReducer,
  ticketEditReducer,
});
