import ticketList from "./ticketList.action";
import statusList from "./statusList.action";
import statusByIdList from "./statusByIdList.action";
import ticketCreate from "./ticketCreate.action";
import ticketEdit from "./ticketEdit.action";
import ticketDelete from "./ticketDelete.action";

export default {
  ...ticketList,
  ...statusList,
  ...statusByIdList,
  ...ticketCreate,
  ...ticketEdit,
  ...ticketDelete,
};
