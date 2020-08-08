const proffys = [
    {
        name: "Diego Fernandes", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8998456789",
        bio:"Enthusiast of the best advanced chemistry technologies. <br> <br> Passionate about blowing things up in the laboratory and changing people's lives through experiments. More than 200,000 people have experienced one of my explosions.",
        subject:"Chemistry",
        cost:"20",
        weekday:[0],
        time_from:[720],
        time_to:[1220]
    },
    {
        name: "Daniele Evangelista", 
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8998456789",
        bio:"Enthusiast of the best advanced chemistry technologies. <br> <br> Passionate about blowing things up in the laboratory and changing people's lives through experiments. More than 200,000 people have experienced one of my explosions.",
        subject:"Chemistry",
        cost:"20",
        weekday:[1],
        time_from:[720],
        time_to:[1220]
    }
]

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

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    const filters = req.query
    return res.render("study.html", {proffys, filters, subjects, weekdays})
}

function pageGiveClasses(req, res){
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty){
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html",{subjects, weekdays})
}

const express = require('express')
const server = express()

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express : server,
    noCache: true,
})

server
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)