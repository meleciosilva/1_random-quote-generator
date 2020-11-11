/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// An array of objects with the following keys: quote, source, citation, year, and type

const quotes = [
  {
    quote: 'Life is 10% what happens to you and 90% how you react to it.',
    source: 'Charles R. Swindoll',
    citation: '',
    year: '',
    type: 'Life'
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
    type: 'Humor'
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
    year: '',
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
  },
  {
    quote: "Don't wait for the right opportunity: create it.",
    source: 'George Bernard Shaw',
    citation: '',
    year: '',
    type: 'Success'
  },
  {
    quote: "When we are no longer able to change a situation, we are challenged to change ourselves.",
    source: 'Victor E. Frankl',
    citation: 'Man\'s Search for Meaning',
    year: 2006,
    type: 'Philosophy'
  }
];

// Returns a random object from the quotes array

function getRandomQuote(arr) {
  let randomNumber = Math.floor( Math.random() * arr.length );
  return quotes[randomNumber];
}


/* Returns a random color using RGB color system
Random color is stored in randomBackgroundColor() function to change the index.html background color
# Code adapted from https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
*/

function randomBackgroundColor() {
  let red = Math.floor( Math.random() * 256);
  let green = Math.floor( Math.random() * 256);
  let blue = Math.floor( Math.random() * 256);
  let randomColor = `rgb( ${red}, ${green}, ${blue} )`;
  return randomColor;
  }


/* 
This function performs the following tasks:
  1. Selects a random object from the quotes array
  2. Stores the object keys (quote and source) into a new html string with <p> tags
  3a. Uses conditional statements to assess whether citation, year, or type are included in the selected object
  3b. If so, this information is stored in the html string
*/

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
  
  // 4. The html string prints the selected object onto the document
  document.getElementById('quote-box').innerHTML = html;  

  /*
  5. A random background color is loaded on the document
  # Code adapted from https://www.w3schools.com/jsref/prop_style_background.asp
  */
  document.body.style.background = randomBackgroundColor(); 
}

// The document will refresh a new object onto the document in 5 seconds intervals

setInterval( printQuote, 5000 );



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);