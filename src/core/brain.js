/*
    I would can libs as lodash or underscore to get, compare, search, whatever for my core game
    but I prefered to think and not use any dependecy. :)
*/

import DataQuestions from '../model/data-questions';
import Careers from '../model/career';

const QUESTIONS = DataQuestions.QUIZZ_OBJ;
const SIZE_QUIZZ_OBJ = DataQuestions.QUIZZ_OBJ.length;
const CAREERS = Careers.getCareers();
let track = [];

/*
    Check if arrays contains item repeated
*/
let contains = function(list, value) {
    var i = list.length;
    while (i--) {
        if (list[i] === value) {
            return true;
        }
    }
    return false;
}

/*
    Generate numbers of according of size questions in data-questions model.
    The numbers not can equals in array.
    Output: [0,4,3,5,7,8,9,1,2,6]
*/
let generateRandomNumbers = function(size, jumpLoop, position) {
    if (jumpLoop) {
        rand = Math.floor(Math.random() * SIZE_QUIZZ_OBJ);
        let isContains = contains(track, rand);
        if (!isContains) {
            return track[position] = rand;
        } else {
            return generateRandomNumbers(size, true);
        }
    } else {
        for(var i = 0; i < size; i++) {
            var rand = Math.floor(Math.random() * SIZE_QUIZZ_OBJ);
            let isContains = contains(track, rand);
            if (!isContains) {
                track[i] = rand;
            } else {
                track[i] = generateRandomNumbers(size, true, i);
            }
        }
    }
    return track;
}

/*
    Calculate if total of questions is greater 85%
*/
let goalAim = (questionsCorrect) => {
    let x = (questionsCorrect*100) / QUESTIONS.length;
    return x >= 85;
};

let wrongOrCorrect = (props) => {
    let wrongOrCorrect = Math.floor(Math.random() * 2) + 1;
    if (wrongOrCorrect === 0) { //WRONG
        let wrong = Math.floor(Math.random() * 4+1) * 25;
        return {
            answerPercent: wrong, 
            answerChosen: Math.floor(Math.random() * props.selectedQuestion.choice.length)
        };
    } else { //CORRECT
        let correct = Math.floor(Math.random() * 4+1) * 25;
        return {answerPercent: correct, answerChosen: props.correctAnswer};
    }
};

let getGuessProfessionalCareer = () => {
    let rand = Math.floor(Math.random() * CAREERS.length - 1);
    if (rand > 0 || rand < CAREERS.length - 1) {
        return CAREERS[rand];
    } else {
        return CAREERS[5];
    }
};

let shuffleList = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
};

let getQuestionsSorted = function() {
    let questionsSorted = [];
    let getRandomNumberQuestions = generateRandomNumbers(SIZE_QUIZZ_OBJ);
    getRandomNumberQuestions.forEach(function(number) {
        questionsSorted.push(QUESTIONS[number]);
    });
    return questionsSorted;
};


var brainQuestions = getQuestionsSorted();

export default {brainQuestions, shuffleList, wrongOrCorrect, getGuessProfessionalCareer, goalAim};

