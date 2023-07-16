import { formatDistanceToNow } from "date-fns";

function DateDisplay({ date }: { date: string | Date | null }) {

  if (!date) {
    return <>{ new Date() }</>;
  }

  return (
    <span>
      { formatDistanceToNow(new Date(date), {addSuffix: true}) }
    </span>
  );
}

export default DateDisplay;