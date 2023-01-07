/*
1. SELECT DOM
2.FETCH API DATA
3.SET EVENTLISTENER
4.SET DATA 
*/

const quoteBody = document.querySelector('#quote');
const quoteAuthor = document.querySelector("#author");
const newQuoteButton = document.querySelector("#btn");

const soundBtn =document.querySelector("#sound");
const copyBtn =document.querySelector("#copy"); 
const tweetBtn =document.querySelector("#tweet"); 



function createRandomQuote(){
    newQuoteButton.innerText = "Loading";

    fetch("https://api.quotable.io/random")
    .then(res => res.json())
    .then(data =>{
        quoteBody.innerText = data.content;
        quoteAuthor.innerText = data.author;
        newQuoteButton.innerText = "New Quote";
    })
}


newQuoteButton.addEventListener('click',createRandomQuote);

soundBtn.addEventListener('click',()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteBody.innerText} by ${quoteAuthor.innerText}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener('click',()=>{
   navigator.clipboard.writeText(quoteBody.innerText);
})

tweetBtn.addEventListener('click',()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteBody.innerText} by ${quoteAuthor.innerText};`;
    window.open(tweetUrl, "_blank");
})