import { useEffect, useState } from "react";
import { CLOCK_REFRESH_MS, formatZonedTime } from "../../lib/time";

type NairobiClockProps = {
  timeZone: string;
};

export function NairobiClock({ timeZone }: NairobiClockProps) {
  const [time, setTime] = useState(() => formatZonedTime(new Date(), timeZone));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatZonedTime(new Date(), timeZone));
    }, CLOCK_REFRESH_MS);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <p className="text-sm text-muted tabular-nums">
      Nairobi · <time dateTime={time}>{time}</time>
    </p>
  );
}
