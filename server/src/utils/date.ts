import { format } from "date-fns";

const date = format(new Date(), "dd-MM-yyyy").split("-").join(".");

export default date;
