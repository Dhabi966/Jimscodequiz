let questions= [


    {question: 'Commonly used data types Do Not Include:',
    multiplechoices: ['strings', 'booleans', 'alerts', 'numbers'],
    answer: 'alerts'},

    {question: 'The condition in an if/else statement is enclosed with __________.',
    multiplechoices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
    answer: 'parenthesis'},

    {question: 'Arrays in JavaScript can be used to store ________.',
    multiplechoices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
    answer: 'all of the above'},

    {question: 'String values must be enclosed within ________ when being assigned to variables',
    multiplechoices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
    answer: 'quotes'},

    {question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    multiplechoices: ['JavaScript', 'terminal/bash', 'for loops', 'console.log'],
    answer: 'console.log'}

];

let score = 0;
let questionStart = 0;

let currentTime = document.querySelector('currentTimer');
let timer = document.querySelector('startTime');
let quizquestions = document.querySelector('quizquestions');

let startingSeconds = 76;
let pause = 0;
let penalty = 10;

let createElement = document.createElement('ol');