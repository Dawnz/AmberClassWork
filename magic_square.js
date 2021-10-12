let problems = document.getElementById("problems");

function check(id) {
 let val =document.getElementById(id);
 let isValid=true;

 if (isNaN(val.value) || val.value < 1 || val.value > 9) {
    // text = "Input not valid";
    {
        val.classList.contains("red")?null:val.classList.add("red");
        isValid=false;
    }
  } else {
    // text = "Input OK";
    if(val.classList.contains("red"))
    {
        val.classList.remove("red");
        val.classList.add("green");
    }
    else if(!val.classList.contains("green"))
        val.classList.add("green");
  }
//   console.log(val.className);
  return isValid
// console.log(id);

}
// console.log();

function isValid() {
    let row1 = document.getElementsByClassName("row1");
    let row2 = document.getElementsByClassName("row2");
    let row3 = document.getElementsByClassName("row3");
    let col1 = document.getElementsByClassName("col1");
    let col2 = document.getElementsByClassName("col2");
    let col3 = document.getElementsByClassName("col3");
    problems.innerHTML ="";
    let ans1,ans2,ans3,ans4,ans5,ans6 =0;
    let check1,check2,check3, check4,check5,check6= false;
    const numbers = Array.from(document.getElementsByClassName("val"));
    const number = numbers.map((number)=>number.value);
    if(new Set(number).size !== number.length)
    {
        problems.innerHTML ="Non Unique Values <br/>";
    }
// problems="yes";
console.log(number);
    // console.log(document.getElementById(row1[1].firstElementChild.id).value);
    for(let i=0; i<row1.length; i++)
    {
        let row = (Number)(document.getElementById(row1[i].firstElementChild.id).value);
        ans1=ans1?ans1+row:row;
        // console.log(ans);
        if (ans1===15)
        {
            check1=true;
        }
        else
        {
            // console.log(ans1);
            check1=false;
        }
    }
    
    for(let i=0; i<row2.length; i++)
    {
        let row = (Number)(document.getElementById(row2[i].firstElementChild.id).value);
        ans2=ans2?ans2+row:row;
        // console.log(ans);
        if (ans2===15)
        {
            check2=true;
        }
        else
        {
            // console.log(ans2);
            check2=false;
        }
    }
    for(let i=0; i<row3.length; i++)
    {
        let row = (Number)(document.getElementById(row3[i].firstElementChild.id).value);
        ans3=ans3?ans3+row:row;
        // console.log(ans);
        if (ans3===15)
        {
            check3=true;
        }
        else
        {
            // console.log(ans3);
            check3=false;
        }
    }
        for(let i=0; i<col1.length; i++)
        {
            let col = (Number)(document.getElementById(col1[i].firstElementChild.id).value);
            ans4=ans4?ans4+col:col;
            // console.log(ans);
            if (ans4===15)
            {
                check4=true;
            }
            else
            {
                // console.log(ans4);
                check4=false;
            }
        }
        
        for(let i=0; i<col2.length; i++)
        {
            let col = (Number)(document.getElementById(col2[i].firstElementChild.id).value);
            ans5=ans5?ans5+col:col;
            // console.log(ans);
            if (ans5===15)
            {
                check5=true;
            }
            else
            {
                // console.log(ans5);
                check5=false;
            }
        }
        for(let i=0; i<col3.length; i++)
        {
            let col = (Number)(document.getElementById(col3[i].firstElementChild.id).value);
            ans6=ans6?ans6+col:col;
            // console.log(ans);
            if (ans6===15)
            {
                check6=true;
            }
            else
            {
                // console.log(ans6);
                check6=false;
            }
        }
        if(check1 && check2 && check3 && check4 && check5 && check6)
        {
            console.log("valid combination for rows and columns");
            problems.innerHTML +="valid combination for rows and columns <br/>";
            return true;
        }
        else
            {
                if(!check1)
                {
                    console.log("invalid combination for row 1",ans1);
                    problems.innerHTML +="invalid combination for row 1 <br/>";
                }
                if(!check2)
                {
                    console.log("invalid combination for row 2",ans2);
                    problems.innerHTML +="invalid combination for row 2 <br/>";
                    
                }
                if(!check3)
                {
                    console.log("invalid combination for row 3",ans3);
                    problems.innerHTML +="invalid combination for row 3 <br/>";
                }
                if(!check4)
                {
                    console.log("invalid combination for column 1",ans4);
                    problems.innerHTML +="invalid combination for column 1 <br/>";
                }
                if(!check5)
                {
                    console.log("invalid combination for column 2",ans5);
                    problems.innerHTML +="invalid combination for column 2 <br/>";
                    
                }
                if(!check6)
                {
                    console.log("invalid combination for column 3",ans6);
                    problems.innerHTML +="invalid combination for column 3 <br/>";
                }
                return false;
            }
    
}