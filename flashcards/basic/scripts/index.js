let myFlashcards = [ 
{
    'question':'What is 3+5?',
    'answer':'Eight.'
},
{
    'question':'What color is the sky?',
    'answer':'Blue.'
},
{
    'question':'Is ice cold?',
    'answer':'Yes.'
}
];


let i=0;
while(i < myFlashcards.length){
    alert(myFlashcards[i].question);
    alert(myFlashcards[i].answer);
    ++i;
}
