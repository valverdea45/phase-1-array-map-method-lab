const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
function titleCased(){
  return tutorials.map(function (element) {
    const splitting = element.split(" ")
    const upperCaseLetters = splitting.map(function (character){
      return character[0].toUpperCase() + character.slice(1)
    })
    return upperCaseLetters.join(" ")
  })
}

console.log(titleCased())
/*
const titleCasedp = tutorials.map(function (element) {
  const upperCaseLetters = element.map(function (character){
    return character[0].toUpperCase() + character.slice[1]
  })
  return element + tutorials.slice[1]
})
*/