const subjects = [
    "Art",
    "Biology",
    "Sciences",
    "Physical education",
    "Physics",
    "Geography",
    "History",
    "Mathematics",
    "English",
    "Chemistry", 
]

const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function convertHoursToMinutes(time){
    const[hour, minutes] = time.split(":")
    const nHour = Number(hour*60)
    const nMinute = Number(minutes)
    return nHour + nMinute
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}