const notes = [
    {
        id: 1,
        subject: "Js",
        date: "Tuesday",
        feeling: "Great",
        timesSpent: 10
    },
    {
        id: 2,
        subject: "Css",
        date: "Monday",
        feeling: "Good",
        timesSpent: 20
    }
]



const english = {
    id: 3,
    subject: "English",
    date: "Wednesday",
    feeling: "Bad",
    timesSpent: 30
}

notes.push(english)

for (const note of notes){
    console.log(`Subjects ${note.id}
    Subject: ${note.subject}
    When learned: ${note.date}
     How you felt learning: ${note.feeling}
     Time Spent: ${note.timesSpent}
     -------
     `)
    }

