let myFlashcards=[ 
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
let ifAsked=false;


function changeQuestion(){
    //only allow to change the question when the answer is revealed.
    if (i == myFlashcards.length){
        i=0;
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
    document.getElementById("answer").innerHTML = 'please hover over the question first.';
    }
}