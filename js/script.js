/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    citation: '',
    year: '',
    type: 'Attitude'
  },

  {
    quote: 'Comparison is the thief of joy.',
    source: 'Theodore Roosevelt',
    citation: '',
    year: '',
    type: 'Personal Development'
  },

  {
    quote: 'Well, well, well, how the turntables.',
    source: 'Michael Scott',
    citation: 'The Office',
    year: '2009',
    type = 'Humor'
  },

  {
    quote: 'There is only one thing in life you can control: Your own effort.',
    source: 'Mark Cuban',
    citation: '',
    year: '',
    type: 'Success'
  },

  {
    quote: 'The only thing you deserve is what you earn.',
    source: 'Tom Brands',
    citation: '',
    year: 'Success',
    type: 'Success'
  },

  {
    quote: 'The ultimate measure of a man is not where he stands in moments of convenience and comfort, but where he stands at times of challenge and controversy.',
    source: 'Martin Luther King, Jr.',
    citation: 'Strength to Love',
    year: 1963,
    type: 'Leadership'
  },

  {
    quote: "You, me, or nobody is gonna hit as hard as life. But it ain't about how hard you hit. It's about how hard you can get hit and keep moving forward; how much you can take and keep moving forward. That's how winning is done!",
    source: 'Rocky Balboa',
    citation: 'Rocky Balboa (film)',
    year: 2006,
    type: 'Success'
  },

  {
    quote: "Change is inevitable. Growth is optional.",
    source: 'John C. Maxwell',
    citation: '',
    year: 2013,
    type: 'Personal Growth'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
  let randomNumber = Math.floor( Math.random() * arr.length );
  return quotes[randomNumber];
}


// Random background color

function randomBackgroundColor() {
  let red = Math.floor( Math.random() * 256);
  let green = Math.floor( Math.random() * 256);
  let blue = Math.floor( Math.random() * 256);
  let randomColor = `rgb( ${red}, ${green}, ${blue} )`;
  return randomColor;
  }


/***
 * `printQuote` function
***/

function printQuote() {
  let selectedQuote = getRandomQuote(quotes);
  let html = `
    <p class = "quote"> ${selectedQuote.quote}</p>
    <p class = "source"> ${selectedQuote.source}
  `
  if (selectedQuote.citation) {
    html += `<span class = "citation"> ${selectedQuote.citation}</span>`;
  }
  if (selectedQuote.year) {
    html += `<span class = "year"> ${selectedQuote.year}</span>`;
  }
  if (selectedQuote.type) {
    html += `<span class = "type"> ${selectedQuote.type}</span>`
  }
  html += '</p>';
  document.getElementById('quote-box').innerHTML = html;  

  document.body.style.background = randomBackgroundColor(); // loads a random background color

}

// Auto refresh page every 10 seconds

setInterval( printQuote, 10000 );



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);