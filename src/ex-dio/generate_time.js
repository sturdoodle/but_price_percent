export function generateTimeIntervals(starteDate, startTime) {
  const intervals = [
    0, 2, 3, 5, 5, 5, 10, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
    15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
    15,
  ]; // intervals in minutes
  const timeArray = [];
  // Convert start time to Date object
  let currentTime = new Date(`${starteDate}T${startTime}:00`);
  // Generate time intervals
  timeArray.push(
    currentTime.toLocaleTimeString([], {
      hour: "2-digit",
      hour12: false,
      minute: "2-digit",
    })
  ); // Original Time
  for (let i = 0; i < intervals.length; i++) {
    currentTime.setMinutes(currentTime.getMinutes() + intervals[i]);
    // Check if the time is within the specified range
    if (
      currentTime.getHours() < 15 ||
      (currentTime.getHours() === 15 && currentTime.getMinutes() <= 30)
    ) {
      timeArray.push(
        currentTime.toLocaleTimeString([], {
          hour: "2-digit",
          hour12: false,
          minute: "2-digit",
        })
      );
    } else {
      break; // Stop if the time exceeds 15:30
    }
  }
  timeArray.push("15:29", "15:30");
  // console.log(timeArray)
  return timeArray;
}
