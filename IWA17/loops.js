// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i <= length; i++) {
        result.push(null);
    }
    return result;
};

const createData = () => {
    // 
    const current = new Date;
    current.setDate(1);

    const startDay = current.getDay();

    const daysInMonth = getDaysInMonth(current);
// 
    const weeks = createArray(6);
    const days = createArray(7);
    const value = null;

    // create empty array to store the output 
    const result = []; 


// fix for loop condition for the week 
    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) {
        value = [{
            week: weekIndex + 1,
            days: [],
        }];

// Fix for loop condition for the day 
        for (let dayIndex = 0;  dayIndex <= days.length - 1; dayIndex++) {
            const day = (dayIndex * 7) + dayIndex - startDay + 1;
            const isValid = (day > 0) && (day <= daysInMonth);
    
            // add day to the array
            value.days.unshift({
                dayOfWeek: dayIndex + 1,
                value: isValid && day,
        });
    };
    result.push(value);
};
 return result;
}


const addCell = (existing, classString, value) => {
    const result = /* html */ `

        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `;
//  add return to get the HTML string
    return result;
}



const createHtml = (data) => {
    // To hold the HTML table
    let result = ''; 

    for (let i = 0; i < data.length; i++) {
// day of the present week
        const week = data[i].days;

        let inner = '';
    
        // Loop the day in the week
        for ( x = 0; x < week.days.length; x++) {

            const day = week.days[x];

            

			const isToday = new Date().getDate() === day[x].value;
            const isWeekend = day[x].dayOfWeek === 1 || day[x].dayOfWeek === 7;
            const isAlternate = data[x].week % 2 === 0;

            let classString = 'table__cell'; 

			if (isToday) {
                classString += `${classString} table__cell_today`
        };
            if (isWeekend) { 
                classString += `${classString} table__cell_weekend`
            };
            if (isAlternate) {
                classString += `${classString} table__cell_alternate`
            };
        inner = addCell(inner, classString, day.value);
      
        }
        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${week}`);
        result += `<tr>${inner}</tr>`
    }
 return result;
}; 


// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
document.querySelector('[data-content]').innerHTML = createHtml(data)