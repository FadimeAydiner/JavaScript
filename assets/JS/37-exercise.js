const btnAvarage=document.querySelector("#btnAvarage");

btnAvarage.addEventListener("click",()=>{

    const grade1=document.querySelector("#grade1").value; 
    const grade2=document.querySelector("#grade2").value; 

    const average=getAvarage(grade1,grade2);
    console.log("avarage="+average);
    const letter=convertNumberToLetter(average);
    console.log(letter);
    alert(letter);


});

const getAvarage=(num1,num2)=>{

   if(isNaN(parseFloat(num1)) || isNaN(parseFloat(num2))) return; 
    const average=(parseFloat(num1)+parseFloat(num2))/2;
    return average;
};

const convertNumberToLetter=(point)=>{

if(isNaN(parseFloat(point))) return;
let letter;

if(point>=90 && point<=100) 
letter="A"
else if(point>=80 && point<90) 
letter="B"
else if(point>=70 && point<80) 
letter="C"
else if(point>=50 && point<70) 
letter="D"
else if(point>=0 && point<50) 
letter="F"

return letter;

};