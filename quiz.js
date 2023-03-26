const answers = [
    [],
    [],
    [],
    ["b", "a", "b", "d", "a"],
    [],
    [],
    [],
    [],
];

//0=segregation, 1=landfills, 2=solid, 3=hazardous, 4=radioactive, 5=ewaste, 6=wastewater, 7=biomedical 

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
    console.log(userAnswers);
    console.log(correctAnswers);
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