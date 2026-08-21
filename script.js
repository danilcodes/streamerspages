let seconds = 300;
let timer;
let chatTimer;

const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vS4zH6wuN-DUpvR0aU21n2SCpi2ZZXN1QnquqHacftVgxxwrJQxXF3knYyR-KJua3KY4m8EkXtcPW0L/pub?gid=0&single=true&output=csv";


fetch(sheetURL)
    .then(response => response.text())
    .then(data => {

        let rows = data.split("\n");

        rows.shift(); // удаляем заголовок name,comment


        messages = rows.map(row => {

            let parts = row.split(",");

            return {
                name: parts[0],
                text: parts[1]
            };

        });

    });

let messages = [];




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
