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
let ifAsked=false;


function alertQuestion(){
    document.getElementById("alert").innerHTML = 'Please CLICK on the question.';
}


function changeQuestion(){
    //only allow to change the question when the answer is revealed.
    if (i == myFlashcards.length){
        i=0;
        document.getElementById("question").innerHTML = myFlashcards[i].question;
        ifAsked=true;
   } else{
        document.getElementById("question").innerHTML = myFlashcards[i].question;
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
    document.getElementById("button").innerHTML = 'please change the question first.';
    }
}
