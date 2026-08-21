let seconds = 300;
let timer;
let chatTimer;


const messages = [
    {
        name: "andi123",
        text: "Hello bang, first time here"
    },
    {
        name: "trader01",
        text: "What is your analysis today?"
    },
    {
        name: "crypto_master",
        text: "Can you explain this entry?"
    },
    {
        name: "newbie88",
        text: "Is this safe for beginners?"
    },
    {
        name: "market_pro",
        text: "Why did you choose this direction?"
    },
    {
        name: "andi_fx",
        text: "How long will this trade take?"
    },
    {
        name: "profit_hunter",
        text: "Can I follow this setup?"
    }
];



function startTest() {

    document.getElementById("startButton").style.display = "none";

    document.getElementById("finishButton").style.display = "inline-block";


    document.querySelector(".status").innerHTML =
    "LIVE TEST IN PROGRESS";


    addMessage();


    chatTimer = setInterval(addMessage, 20000);

    timer = setInterval(updateTimer, 1000);

}



function finishTest(){

    completeTest();

}



function completeTest(){

    clearInterval(timer);
    clearInterval(chatTimer);


    document.querySelector(".status").innerHTML =
    "TEST COMPLETED";


    document.getElementById("finishButton").style.display = "none";

    document.getElementById("restartButton").style.display = "inline-block";

}



function restartTest(){

    location.reload();

}



function addMessage(){

    let random = messages[Math.floor(Math.random() * messages.length)];

    let chat = document.getElementById("chat");

    let div = document.createElement("div");

    div.className = "message";


    div.innerHTML = `
    <span class="username">@${random.name}</span><br>
    ${random.text}
    `;


    chat.appendChild(div);


    if(chat.children.length > 8){
        chat.removeChild(chat.children[0]);
    }

}




function updateTimer(){

    seconds--;


    let minutes = Math.floor(seconds / 60);

    let sec = seconds % 60;


    document.querySelector(".timer").innerHTML =
    `${minutes}:${sec.toString().padStart(2,"0")}`;



    if(seconds <= 0){

        completeTest();

    }

}
