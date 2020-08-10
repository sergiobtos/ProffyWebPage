const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: 'Sergio Silva',
        avatar: 'https://avatars3.githubusercontent.com/u/48535068?s=460&u=65ebcd6c3e93c7ba4ae79433f627716789f20c96&v=4',
        whatsapp: '647537563',
        bio: 'The best prof',
    }

    classValue = {
        subject:1 ,
        cost:'20',
    }

    classScheduleValues = [
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    const selectedProffys =  await db.all("SELECT * FROM proffys")
    
    const selectedClassesProffys =  await db.all(`
        SELECT classes.*, proffys.* 
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
        `)
        //console.log(selectedClassesProffys)

    const selectedClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = 0
        AND class_schedule.time_from <= 520
        AND class_schedule.time_to > 520
    `) 
    
    console.log(selectedClassesSchedules)   
})