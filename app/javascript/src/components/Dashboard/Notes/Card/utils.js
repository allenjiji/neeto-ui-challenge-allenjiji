import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

const formatDateTime = dateTime => dayjs(dateTime).format("dddd, hh:mmA");
const getRelativeTime = dateTime => dayjs(dateTime).fromNow();

export { formatDateTime, getRelativeTime };
