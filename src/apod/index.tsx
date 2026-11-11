import Logger from "js-logger";
import { useParams } from "react-router";
import { isValidISODate } from "../utils";

type DateParams = {
  date: string;
};

export default function APOD() {
  const params = useParams<DateParams>();
  Logger.log("date", params.date);

  const isValidDate = isValidISODate(params.date ?? "");

  return <div>This is the apod</div>;
}
