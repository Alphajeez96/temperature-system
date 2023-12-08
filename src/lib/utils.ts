export const getLocalTimeFromWeatherData = (dt: number, timezone: number) => {
  const localTime = new Date((dt + timezone) * 1000)

  const hours = localTime.getHours()
  const minutes = localTime.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'

  const formattedMinutes = minutes.toString().padStart(2, '0')

  return `${hours}:${formattedMinutes} ${ampm}`
}
