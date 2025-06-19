const date = new Date()
console.log(date.toISOString())

const dateWithTimezone = new Date("2025-06-19T01:30:01.409+03:00")
console.log(new Date().toLocaleString())
console.log(dateWithTimezone.toLocaleString()) // A hora está 3h a menos de diferença.