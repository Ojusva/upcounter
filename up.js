var countInterval ;
function startCounter(){
 var number= parseInt(document.getElementById("number").value);


 if(isNaN(number)){
    alert("please enter a number");
    clearInterval(countInterval);
    return;
 }

 if (number<1 || number>9) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
 }

 
 var currentno= document.querySelector(".counter .current");
 var nextno= document.querySelector(".counter .next");
 var count = 0;

 resetNumber(currentno, nextno);
 clearInterval(countInterval);


 countInterval = setInterval(function(){
    if(count===number){
         clearInterval(countInterval);
         alert("counter has been stopped");
         return;
}
increaseCount(currentno, nextno);
count++;

 },1000)
}

function resetNumber(currentno, nextno,end){
    currentno.innerText = 0;
    nextno.innerText = 1;
}

function increaseCount(currentno, nextno) {
    nextno.classList.add("animate");
    setTimeout(function(){
        currentno.innerText = nextno.innerText;
        nextno.classList.remove("animate");

        nextno.innerText = parseInt(nextno.innerText) + 1;
    }, 500);
}

