const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment


console.log(holidays.futureId ? holidays.futureId.name :`ID ${futureId} not created yet`) 
//holidays.futureId could optionally be written as holidays[futureId]
//'holidays.futureId ?' checks whether an item exists in the holidays object with a key of 'futureId' via the question mark"?"
// If it does, the name item in it must be logged, if not, the interpolated text must appear

copied = holidays.christmas

copied = { 
    name: 'X-mas' 
}  //couldn't redefine name in 6/christmas straight away, took another route(schalk analogy)

correctDate = copied.date
correctDate = new Date(`25 December ${currentYear}`)

correctDate.setHours(0)
correctDate.setMinutes(0)

isEarlier = correctDate < holidays[6].date // holidays[6].date contains the initial wrong date, hence console.log is "true"
console.log('New date is earlier:', isEarlier)




if (holidays[christmas].id !== copied.id) {
    console.log('ID change:', holidays[christmas].id == copied.id && copied.id);
  }

  if (holidays[christmas].name !== copied.name) {
    console.log('Name change:', holidays[christmas].name !== copied.name && copied.name);
  }

  if (holidays[christmas].date !== correctDate) {
    console.log('Date change:', holidays[christmas].date !== correctDate && correctDate.toLocaleDateString('en-GB'));
  }




// const holidayTimestamps = Object.values(holidays).map(holiday => holiday);

const holiday = {
    [0]: parseInt(new Date(`16 December ${currentYear}`).toLocaleDateString('en-GB')),
    [1]: parseInt(new Date(`1 April ${currentYear}`).toLocaleDateString('en-GB')),
    [2]: parseInt(new Date(`26 December ${currentYear}`).toLocaleDateString('en-GB')),
    [3]: parseInt(new Date(`1 January ${currentYear}`).toLocaleDateString('en-GB')),
    [4]: parseInt(new Date(`9 August ${currentYear}`).toLocaleDateString('en-GB')),
    [5]: parseInt(new Date(`24 September ${currentYear}`).toLocaleDateString('en-GB')),
    [6]: parseInt(correctDate.toLocaleDateString('en-GB')),
    [7]: parseInt(new Date(`16 June ${currentYear}`).toLocaleDateString('en-GB')),
    [8]: parseInt(new Date(`21 March ${currentYear}`).toLocaleDateString('en-GB')),
}

const firstHolidayTimestamp = Math.min(parseInt(Object.values(holiday)));
const lastHolidayTimestamp = Math.max(parseInt(Object.values(holiday)));

const firstHoliday = firstHolidayTimestamp;
const lastHoliday = lastHolidayTimestamp;



console.log(firstHoliday)
console.log(lastHoliday)

const randomHoliday = holiday[Math.random]
console.log(randomHoliday)

