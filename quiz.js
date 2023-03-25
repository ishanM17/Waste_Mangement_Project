function check()
{
    var count = 0;

    // question 1 
    var ans1 = document.getElementsByClassName("q1");
    for(let i = 0 ;i<ans1.length;i++)
    {
        if(ans1[i].checked)
        {
            console.log(ans1[i].value);
            if(ans1[i].value == 3)
            {
                document.getElementById("result1").innerHTML = "correct "
                count = count + 1;
            }
            else
            {
                document.getElementById("result1").innerHTML = "incorrect"
            }
        }
    }

    qustion 

    document.getElementById("re").innerHTML= count;
    
}