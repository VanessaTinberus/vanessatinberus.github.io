let myFlashcards=[ 
{
    'question':'Does the sun rise in the east?',
    'answer':'Yes.',
    'link': 'images/sunrise.jpeg'
},
{
    'question':'Is New York the capital of the U.S.A?',
    'answer':'No.',
    'link': 'images/new-york.jpg'
},
{
    'question':'How many days are there in March?',
    'answer':'31.',
    'link': 'images/march.jpeg'
}
];


let i=0;
let ifAsked=false;


function changeQuestion(){
    //only allow to change the question when the answer is revealed.
    if (i == myFlashcards.length){
        i=0;
        document.getElementById("question").innerHTML = myFlashcards[i].question;
        document.getElementById("image").src = myFlashcards[i].link;
        ifAsked=true;
   } else{
        document.getElementById("question").innerHTML = myFlashcards[i].question;
        document.getElementById("image").src = myFlashcards[i].link;
        ifAsked=true;
    }
    //document.getElementById("question").innerHTML = 'please check the answer first.';
}



function changeAnswer(){
    //alert(ifAsked);
    if (ifAsked == true){
    document.getElementById("answer").innerHTML = myFlashcards[i].answer;
        //only allow to reveal the answer when the question is changed.
        ifAsked=false;
        ++i;
    } else {
    document.getElementById("button").innerHTML = 'please click on the question first.';
    }
}
