import {TimeInput} from "@nextui-org/date-input";
import {Time} from "@internationalized/date";

export const TimeSelector = () => {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  return(
    <TimeInput 
      labelPlacement="outside" 
      label="Event Time" 
      defaultValue={new Time(currentHours, currentMinutes)} 
      minValue={new Time(currentHours, currentMinutes)}
      hourCycle={24}
    />
  );
}