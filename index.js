const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stop Propagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

let words = tutorials.map(tutorial=> tutorial.split(' '));


function titleCased(innie) {
  let newIn = ((innie.toUpperCase(0)) + (innie.slice(1, innie.length -1).toLowerCase()))
}

console.log(words.map(word => titleCased(word)))

