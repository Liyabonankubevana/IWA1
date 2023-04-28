// scripts.js

const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  
  const data = {
    response: {
      requestType: "FETCH_ATHLETE_DATA",
      requestBy: "ALL_MATCHING_ATHLETES",
      forDisplay: "BEST_RACES",
  
      data: {
        NM372: {
          firstName: "Nwabisa",
          surname: "Masiko",
          id: "NM372",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [9, 7, 8, 6],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [6, 7, 8, 7],
            },
          ],
        },
  
        SV782: {
          firstName: "Schalk",
          surname: "Venter",
          id: "SV782",
          races: [
            {
              date: '2022-11-18T20:00:00.000Z',
              time: [10, 8, 3, 12],
            },
            {
              date: '2022-11-25T20:00:00.000Z',
              time: [6, 8, 9, 11],
            },
            {
              date: '2022-12-02T20:00:00.000Z',
              time: [10, 11, 4, 8],
            },
            {
              date: '2022-12-09T20:00:00.000Z',
              time: [9, 8, 9, 11],
            },
          ],
        },
      },
    },
  };
  
  // Only edit below this comment
  
  const createHtml = (athlete) => {

// Get athlete data from the Object that was provided.
    const {firstName, surname, id, races} = data.response[athlete];
    
    races.reverse();
    const date = new Date(races[0].date);
     const time = races[0].time;
  
    const fragment = document.createDocumentFragment();

// Create an h2 element for the athlete's id, and set its text content to the id value  
    const title = document.createElement("h2");
    title.textContent = data.response.athlete.id;
    fragment.appendChild(title);

// Create a dl element for the athlete's details
    const list = document.createElement("dl");


    const day = date.getDate();
    const month = MONTHS[date.month];
    const year = date.year;

// Declare const variables 
    const [first, second, third, fourth] = time;
    const total = first + second + third + fourth;

        // Formula to calculate each athlete's time. Round down and use the total variable to calculate the  
    const hours = Math.floor(total / 60);
    const minutes = total;
  
    list.innerHTML = /* html */ `
      <dt>Athlete</dt>
      <dd>${firstName} ${surname}</dd>
  
      <dt>Total Races</dt>
      <dd>${races}</dd>
  
      <dt>Event Date (Latest)</dt>
      <dd>${day} ${month} ${year}</dd>
  
      <dt>Total Time (Latest)</dt>
      <dd>${hours.padStart(2, 0)} ${minutes}</dd>
    `;
  
    fragment.appendChild(list);

    return fragment;
  }
  
  const {NM372: {id: NM372}, SV782: {id: SV782}} = data.response.data
  document.querySelector('[data-athlete="NM372"]').appendChild(createHtml(NM372));
  document.querySelector('[data-athlete="SV782"]').appendChild(createHtml(SV782));