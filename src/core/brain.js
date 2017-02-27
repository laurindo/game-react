/*
    I would can libs as lodash or underscore to get, compare, search, whatever for my core game
    but I prefered to think and not use any dependecy. :)
*/

import DataQuestions from '../model/data-questions';

const QUESTIONS = DataQuestions.QUIZZ_OBJ;
const SIZE_QUIZZ_OBJ = DataQuestions.QUIZZ_OBJ.length;
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

let getQuestionsSorted = function() {
    let questionsSorted = [];
    let getRandomNumberQuestions = generateRandomNumbers(SIZE_QUIZZ_OBJ);
    getRandomNumberQuestions.forEach(function(number) {
        questionsSorted.push(QUESTIONS[number]);
    });
    return questionsSorted;
};


var brainQuestions = getQuestionsSorted();

export default {brainQuestions};

