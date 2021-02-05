/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/
//Fixes spaces, new lines created by hitting enter and tabs from code editor
const fancyLiteral = (literal) => {
  return literal
    .split('\n')
    .map((line) => line.trim())
    .join('\n');
};

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
const test = 'string';
/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
const sum = 10 + 20;
/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
const random = Math.floor(Math.random() * 21);
/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
const me = {
  name: 'ardi',
  surname: 'germenji',
  age: '31',
  other: '🔥',
};
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age;
/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
me.skills = ['javascript', 'html', 'css', 'bootstrap'];
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/

me.skills.pop();

// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
const dice = () => Math.floor(Math.random() * 6 + 1);
// for (let i = 0; i < 100; i++) {
// console.log(dice());
// }

/* Ex.2 
    // Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/

const whoIsBigger = (num1, num2) => (num1 > num2 ? num1 : num2);
for (let i = 0; i < 10; i++) {
  const num1 = dice();
  const num2 = dice();
  console.log(
    fancyLiteral(`
  num1: ${num1}
  num2: ${num2}
  the bigger is: ${whoIsBigger(num1, num2)}
  `)
  );
}
/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
const splitMe = (string) => {
  const arr = [];
  let word = '';
  for (let i = 0; i < string.length; i++) {
    const letter = string[i];
    //se letter === space => push the world

    if (letter === ' ') {
      arr.push(word);
      word = '';
    } else {
      //se letter !== space => add to the word

      word += letter;
    }
    //check in order to push the last word
    if (i === string.length - 1) arr.push(word);
  }
  return arr;
};
const splitMeFaster = (string) => string.split(' ');

// console.log(splitMe('i love coding and solving problems 🚀'));
// console.log(splitMeFaster('i love coding and solving problems 🚀'));
/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/

const deleteOne = (string, bool) => {
  //funzione per troncare in base all'indice
  const truncate = (string, indexToTrunc) => {
    let truncated = '';
    for (let i = 0; i < string.length; i++) {
      const letter = string[i];
      if (i === indexToTrunc) continue;
      truncated += letter;
    }
    return truncated;
  };

  if (bool) {
    return truncate(string, 0);
  } else {
    return truncate(string, string.length - 1);
  }
};
const deleteOneFaster = (string, bool) =>
  bool ? string.slice(1) : string.slice(0, -1);

// console.log(deleteOne('ciaobelli', true));
// console.log(deleteOne('ciaobelli', false));
// console.log(deleteOneFaster('ciaobelli', true));
// console.log(deleteOneFaster('ciaobelli', false));

/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/

const onlyLetters = (string) => {
  let letters = '';
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    //try to covert the char in string => if it returns NaN the charc is a letter
    // so concatenate
    if (isNaN(parseInt(character))) letters += character;
  }
  return letters;
};

const onlyLettersFaster = (string) => string.replace(/\d/gi, '');
// console.log(onlyLetters('I l34634ove 123 whate4636ver'));
// console.log(onlyLettersFaster('I love 12103 whatev23423er'));

/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
const isThisAnEmail = (string) => {
  //what is a valid email?
  // somechar@someother.com
  // first mandatory conditions: must have @ and a .
  // need to check if we have an @ preceded by chars, followed by chars
  // firstPart @ secondPart . thirdPart
  //loop and check mandatory conditions and if there are other non alphabetic chars

  function isValidMailChar(char) {
    const validMailChars = 'abcdefghijklmnopqrstuvwxyz@.0123456789';
    let counter = 0;
    // loop through valid chars, if it's === to anyone of them increment counter
    for (const validChar of validMailChars) {
      if (char === validChar) counter++;
    }
    // if counter > 0 the char is valid
    return counter > 0 ? true : false;
  }

  let k = 0,
    j = 0;
  for (let i = 0; i < string.length; i++) {
    //check if we have exactly one @ and one .
    const char = string[i];
    if (char === '@') k++;
    if (char === '.') j++;
    // check if the char is a valid mail char
    if (!isValidMailChar(char)) return false;
  }
  // check if there are chars before @
  if (string.slice(0, string.indexOf('@')) === '') return false;

  //check if there are chars between @ and .
  const sliceBetween = string.slice(
    string.indexOf('@') + 1,
    string.indexOf('.')
  );
  if (sliceBetween === '') return false;

  // check if there are nums after the @ù
  // a char is a num if isNaN(parseInt(char)) === false
  if (
    string
      .slice(string.indexOf('@'))
      .split('')
      .some((char) => isNaN(parseInt(char)) === false)
  )
    return false;

  if (string.indexOf('.') < string.indexOf('@'))
    // the @ must come before the dot
    return false;

  // check if we have exaclty one of each
  if (k !== 1 || j !== 1) return false;

  //every other case is valid
  return true;
};

// console.log(isThisAnEmail('dasd@.da'));
// console.log(isThisAnEmail('dasds@ff.da'));
// console.log(isThisAnEmail('dada.sd@sfda'));
// console.log(isThisAnEmail('dadadasd@ff.ad'));
// console.log(isThisAnEmail('dadadasd@ff.ad'));
// console.log(isThisAnEmail(',,fafiaf@dad,sd'));
// console.log(isThisAnEmail(',,fafiaf@dad,.sd'));

/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
const whatDayIsIt = () =>
  ['mon', 'tue', 'wen', 'thu', 'fri', 'sat', 'sun'].find(
    (_, idx) => idx === new Date().getDay() - 1
  );
// console.log(whatDayIsIt());
/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/
function rollTheDices(num) {
  const values = [...Array(num)].map((el) => (el = dice()));
  const sum = values.reduce((acc, cv) => acc + cv);
  return {
    values,
    sum,
  };
}

// console.log(rollTheDices(5));
/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/

// new date () is now => - the new Date(target) => days in milliseconds / 1 day in milliseconds
const howManyDays = (date) =>
  Math.floor((new Date() - new Date(date)) / 86400000);

// console.log(howManyDays('2-5-2021'));
// console.log(howManyDays('2-4-2021'));
// console.log(howManyDays('2-3-2021'));
// console.log(howManyDays('1-31-2021'));

/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/

const isTodayMyBDay = (bdayDate) => {
  const bday = new Date(bdayDate);
  const day = bday.getDay();
  const month = bday.getMonth();
  const now = new Date();
  const nowDay = now.getDay();
  const nowMonth = now.getMonth();
  return day === nowDay && month === nowMonth;
};

// console.log(isTodayMyBDay('2-5-2021'));
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
const deleteProp = (obj, str) => {
  delete obj[str];
  return obj;
};
// console.log(deleteProp({ greet: 'hi', aRocket: '🚀' }, 'greet'));

/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/
// const olderMovie = (arr) => [
//   arr.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))[0].Title,
//   arr.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))[0].Year];
const olderMovie = (movies) =>
  movies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year))[0].Title;
// console.log(olderMovie(movies));

/* Ex.13
    Write the function countMovies that returns the number of movies into the array.
*/
const countMovies = (movies) => movies.length;
// console.log(countMovies(movies));
/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
const onlyTitles = (movies) => movies.map((movie) => movie.Title);
// console.log(onlyTitles(movies));
/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/
const onlyThisMillennium = (movies) =>
  movies.filter((movie) => parseInt(movie.Year) >= 2000);

// console.log(onlyThisMillennium(movies));
/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/
const getMovieById = (movies, id) =>
  movies.find((movie) => movie.imdbID.toLowerCase() === id.toLowerCase()) ??
  'Not found';

// console.log(getMovieById(movies, 'dsd4'));
// console.log(getMovieById(movies, 'tt4154756'));
/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/
const sumYears = (movies) =>
  movies.reduce((acc, cv) => acc + parseInt(cv.Year), 0);
// console.log(sumYears(movies));
/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/
const searchMovie = (movies, string) =>
  movies.filter((movie) =>
    movie.Title.toLowerCase().includes(string.toLowerCase())
  ) ?? 'Not Found';
// console.log(searchMovie(movies, 'fli'));
// console.log(searchMovie(movies, 'avenger'));
// console.log(searchMovie(movies, 'lord'));
/* Ex.19
    Write the function searchAndDivide that receives a string and "returns an object" with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/
const searchAndDivide = (movies, string) => ({
  match: [...searchMovie(movies, string)],
  nonMatch: [
    ...movies.filter(
      (movie) => !movie.Title.toLowerCase().includes(string.toLowerCase())
    ),
  ],
});

// console.log(searchAndDivide(movies, 'fli'));
// console.log(searchAndDivide(movies, 'avengers'));

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

const deleteX = (arr, n) => arr.splice(n, 1);

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
const halfTree = (height) =>
  [...Array(height)].map((_, idx) => '*'.repeat(idx + 1)).join('\n');
// console.log(halfTree(1));
// console.log(halfTree(3));
// console.log(halfTree(4));
// console.log(halfTree(6));

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/
const tree = (height) =>
  [...Array(height)]
    .map(
      (_, idx) =>
        ' '.repeat((height * 2 - 1 - (idx * 2 + 1)) / 2) +
        '*'.repeat(idx * 2 + 1) +
        ' '.repeat((height * 2 - 1 - (idx * 2 + 1)) / 2)
    )
    .join('\n');
// console.log(tree(5));
/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/
const isPrime = (num) =>
  [...Array(num)]
    .map((_, idx) => idx + 1)
    .filter((denominator) => num % denominator === 0).length === 2;

for (let index = 0; index < 100; index++) {
  console.log(`${index} is ${isPrime(index) ? '' : 'not '}a prime number`);
}
/* Movies array is an example array, used for the exs. Don't change it :)  */
