const answers = [
    ["a", "c", "c", "d", "c"], //segregation
    ["c", "b", "d", "a", "c"], //landfills
    ["c", "a", "b", "c", "a"], //solid
    ["b", "a", "b", "d", "a"], //hazardous
    ["a", "d", "b", "c", "d"], //radioactive
    ["d", "b", "a", "b", "c"], //ewaste
    ["d", "a", "d", "b", "d"], //wastewater
    ["a", "b", "c", "d", "a"], //biomedical
];

function displayResult(index){
    let correctAnswers = answers[index];
    let userAnswers = [];
    let qDiv;
    let question;
    let score = 0;
    for(let i=1; i<=5; i++){
        qDiv = document.getElementById("question" + i);
        question = document.getElementsByName("a" + i);
        for(let j=0; j<question.length; j++){
            if(question[j].checked){
                userAnswers.push(question[j].value);  
                break;
            }
        }
    }

    if(userAnswers.length !== 5){
        alert("please attempt all questions!");
        return;
    }

    for(let i=0; i<userAnswers.length; i++){
        if(userAnswers[i] !== correctAnswers[i]){
            document.getElementById("question" + (i+1)).style.backgroundColor = "#CD5C5C";
        }
        else{
            document.getElementById("question" + (i+1)).style.backgroundColor = "";
            score++;
        }
    }

    let resultText = document.getElementsByClassName("result-text")[0];
    resultText.innerHTML = "Score: " + score + "/5";
}