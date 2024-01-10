var b1btn, b2btn, b3btn, b4btn, b5btn,  
b6btn, b7btn, b8btn, b9btn,b10btn; 
  
b1btn = document.getElementById("b1"); 
b2btn = document.getElementById("b2"); 
b3btn = document.getElementById("b3"); 
b4btn = document.getElementById("b4"); 
b5btn = document.getElementById("b5"); 
b6btn = document.getElementById("b6"); 
b7btn = document.getElementById("b7"); 
b8btn = document.getElementById("b8"); 
b9btn = document.getElementById("b9"); 
b10btn=document.getElementById("but");


function myfunc() { 
  
    var b1, b2, b3, b4, b5, b6, b7, b8, b9; 
    b1 = document.getElementById("b1").value; 
    b2 = document.getElementById("b2").value; 
    b3 = document.getElementById("b3").value; 
    b4 = document.getElementById("b4").value; 
    b5 = document.getElementById("b5").value; 
    b6 = document.getElementById("b6").value; 
    b7 = document.getElementById("b7").value; 
    b8 = document.getElementById("b8").value; 
    b9 = document.getElementById("b9").value; 
  
    if (( b1 == 'X') && (b2 == 'X') && (b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b2btn.style.cssText = " background-color: yellow; color:red"; 
        b3btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b1 == 'X') && ( b4 == 'X') && (b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b4btn.style.cssText = " background-color: yellow; color:red"; 
        b7btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b7 == 'X') && (b8 == 'X') && (b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.cssText = " background-color: yellow; color:red"; 
        b8btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b3 == 'X') && (b6 == 'X') && (b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b3btn.style.cssText = " background-color: yellow; color:red"; 
        b6btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b1 == 'X') && (b5 == 'X') && (b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red";  
    } 
    else if ((b3 == 'X') && (b5 == 'X') && (b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b7btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b2 == 'X') && (b5 == 'X') && (b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b8btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b4 == 'X') && (b5 == 'X') && (b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b6btn.style.cssText = " background-color: yellow; color:red"; 
    } 
  
    else if ((b1 == 'O') && (b2 == 'O') && (b3 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b2btn.style.cssText = " background-color: yellow; color:red"; 
        b3btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b1 == 'O') && (b4 == 'O') && (b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b4btn.style.cssText = " background-color: yellow; color:red"; 
        b7btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b7 == 'O') && (b8 == 'O') && (b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.cssText = " background-color: yellow; color:red"; 
        b8btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red";  
    } 
    else if ((b3 == 'O') && (b6 == 'O') && (b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b3btn.style.cssText = " background-color: yellow; color:red"; 
        b6btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b1 == 'O') && (b5 == 'O') && (b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b9btn.style.cssText = " background-color: yellow; color:red";  
    } 
    else if ((b3 == 'O') && (b5 == 'O') && (b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b7btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b2 == 'O') && (b5 == 'O') && (b8 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b8btn.style.cssText = " background-color: yellow; color:red"; 
    } 
    else if ((b4 == 'O') && (b5 == 'O') && (b6 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.cssText = " background-color: yellow; color:red"; 
        b5btn.style.cssText = " background-color: yellow; color:red"; 
        b6btn.style.cssText = " background-color: yellow; color:red"; 
    } 
   
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Match Tie"; 
    }


    
    
     
    else { 
  
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player O Turn"; 
        } 
    } 
} 
  
function myfunc_2() { 
    location.reload(); 
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = ''; 
} 
  
var flag = 1; 
function myfunc_3() { 
    if (flag == 1) { 
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b1").value = "O"; 
        document.getElementById("b1").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_4() { 
    if (flag == 1) { 
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_5() { 
    if (flag == 1) { 
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_6() { 
    if (flag == 1) { 
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_7() { 
    if (flag == 1) { 
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_8() { 
    if (flag == 1) { 
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_9() { 
    if (flag == 1) { 
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_10() { 
    if (flag == 1) { 
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1; 
    } 
} 
  
function myfunc_11() { 
    if (flag == 1) { 
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1; 
    } 
} 
b1btn.addEventListener("click",function(){
myfunc_3();
myfunc();

})
b2btn.addEventListener("click",function(){
myfunc_4();
myfunc();

})
b3btn.addEventListener("click",function(){
myfunc_5();
myfunc();

})
b4btn.addEventListener("click",function(){
myfunc_6();
myfunc();

})
b5btn.addEventListener("click",function(){
myfunc_7();
myfunc();

})
b6btn.addEventListener("click",function(){
myfunc_8();
myfunc();

})
b7btn.addEventListener("click",function(){
myfunc_9();
myfunc();

})
b8btn.addEventListener("click",function(){
myfunc_10();
myfunc();

})
b9btn.addEventListener("click",function(){
myfunc_11();
myfunc();

})

b10btn.addEventListener("click",myfunc_2)