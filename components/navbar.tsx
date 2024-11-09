import { useEffect, useState } from 'react';
import { RangeCalendar } from "@nextui-org/calendar";
import { today, getLocalTimeZone, parseDate } from "@internationalized/date";

export const Navbar = () => {
  const [firstStreakDay, setFirstStreakDay] = useState(today(getLocalTimeZone()));

  useEffect(() => {
    const storedFirstStreakDay = localStorage.getItem('firstStreakDay');
    if (storedFirstStreakDay) {
      setFirstStreakDay(parseDate(storedFirstStreakDay));
    } else {
      const currentDay = today(getLocalTimeZone()).toString();
      localStorage.setItem('firstStreakDay', currentDay);
      setFirstStreakDay(parseDate(currentDay));
    }
  }, []);

  return (
    <header>
      <h1>Study Streak</h1>
      <RangeCalendar 
        aria-label="Calendar" 
        defaultValue={{
          start: firstStreakDay,
          end: today(getLocalTimeZone())
        }} 
        isReadOnly
        allowsNonContiguousRanges
      />
    </header>
  );
};