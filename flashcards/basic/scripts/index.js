let myFlashcards=[ 
{
    'question':'Does the sun rise in the east?',
    'answer':'Yes.'
},
{
    'question':'Is New York the capital of the U.S.A?',
    'answer':'No.'
},
{
    'question':'How many days are there in March?',
    'answer':'31.'
}
];


let i=0;
while(i < myFlashcards.length){
    alert(myFlashcards[i].question);
    alert(myFlashcards[i].answer);
    ++i;
}
