/*console.log("subscribe to my youtube channal".split(""))
let mynumber=42;
let myfloat=34.4;
console.log(myvariable+3)
console.log(Number(myvariable)+3);
console.log(Number.isInteger(mynumber));
console.log(Number.parseInt(myvariable));
let myvariable="Welcome";
let mylen=myvariable.length;
console.log(mylen);
console.log(myvariable.charAt(Math.floor(Math.random()*mylen)));
let mark=input;
if(mark>=90){
    grade="A";
}
else if(mark>=80){
 grade="b"
}
else if(mark>=70){
    grade="c"
}   
else if(mark>=60){
    grade="d"
}   
else{
    grade="fail,try again;"
}
console.log(grade);
*/
//cpomputer vs computer
/*
const input1 = prompt("PLAYER 1: ENTER NO '1'");
const input2 = prompt("PLAYER 2: ENTER NO '0'");
let no1=Math.floor(Math.random()*2+2);
let no2=Math.floor(Math.random()*2+2);
let player1choice;
let player2choice;
function game(){
    if(input1==1){
    
    if(no1===1){
    player1choice="stone";
    }
    else if(no1===2){        
    player1choice="scissor";
    }
    else {        
    player1choice="paper";
    }

    }
    else{
        
    }
    
    if(input2==0){
    
    if(no2===1){
    player2choice="stone";
    }
    else if(no2===2){        
    player2choice="scissor";
    }
    else {        
    player2choice="paper";
    }
    
    }
    console.log(no1);
    console.log(no2);
    
        
}

game();
console.log(player1choice);
console.log(player2choice);



//alert(`Your name is ${input}`);
//console.log(Math.floor(Math.random()*2+2));


//console.log(input1);
//console.log(no2);

function output(){
console.log("STONE🪨🪨 PAPER📃📃 SCISSOR✂️✂️");
console.log(`You : ${player1choice}`);
console.log(`Computer: ${player2choice}`);
switch(player1choice){
    case (player2choice):
        console.log("GAME TIE!!😮😮😮😮");
        break;
    case ("stone"):
        if(player2choice!= "paper"&&player2choice=="scissor"){
        console.log("You Win the Game😎😎😎😎😎");
        }
        else{
            console.log("Computer wins the Game😎😎😎😎😎");
        }
        break;
    case ("paper"):
        if(player2choice!= "stone"&&player2choice=="scissor"){
        console.log("Computer Win the Game😎😎😎😎😎");
        }
        else{
            console.log("You Win the Game😎😎😎😎😎");
        }
        break;
    case ("scissor"):
        if(player2choice== "paper"&&player2choice!="stone"){
        console.log("You Win the Game😎😎😎😎😎");
        }
        else{
            console.log("Computer Wins the Game😎😎😎😎😎");
        }
        break;
    
    default:
        console.log("Computer Win the Game😎😎😎😎😎");
}

}
output();*/
//actual program






let open=confirm("WELCOME TO🙏🙏\n STONE🪨PAPER📃SCISSOR✂️");
if(open){
    const input1 = prompt("PLAYER 1: ENTER Number: \n 1->Stone\n 2->Paper \n3->Scissor ");
    let no2=Math.floor(Math.random()*2+1);
    let player1choice;
    let player2choice;
    function player1(){
        input1==1?player1choice="stone":input1==2?player1choice="paper":input1==3?player1choice="scissor":input1>=4?ok():"thank you";
    }
    function ok(){
        if(input>=4){
            let openchoice = confirm("INVALID INPUT TRY AGAIN!!");
            if(confirm==1){
                location.reload();
            }
            else{
                window.alert("Thank you");
            }
        }
    }
    function player2(){
        no2===1?player2choice="stone":no2===2?player2choice="scissor":player2choice="paper";  
    }
    player1();
    player2();
    let result;
    function output(){
        switch(player1choice){
            case (player2choice):
                result="GAME TIE!!😮😮😮😮";
                break;
            case ("stone"):
                player2choice!= "paper"&&player2choice=="scissor"?result="You Win the Game😎😎😎😎😎":result="Computer wins the Game😎😎😎😎😎";
                break;
            case ("paper"):
                player2choice!= "stone"&&player2choice=="scissor"?result="Computer Win the Game😎😎😎😎😎":result="You Win the Game😎😎😎😎😎";
                break;
            case ("scissor"):
                player2choice== "paper"&&player2choice!="stone"?result="You Win the Game😎😎😎😎😎":result="Computer Wins the Game😎😎😎😎😎";
                break;
            default:
                result="Computer Win the Game😎😎😎😎😎";
    }
    
    }
    disp1="STONE🪨🪨 PAPER📃📃 SCISSOR✂️✂️";
    disp2=`You : ${player1choice ??"Invalid"}`;
    disp3=`Computer: ${player2choice}`;
    output();
    function display(){
        window.alert(disp1+"\n\n"+disp2+"\n\n"+disp3+"\n\n\n"+result);
        let conmmand=confirm("Play Again"??"Thankyou for Playing ");
        conmmand? location.reload() :alert("Thanks for playing");
    }   
    display ();
}
else{
    window.alert("OK PLAY AFTER SOMETIMES....")
}





/*
let n=123;
let sum=0;
let d;
while(n!=0){
d=n%10;
sum+=d;
n=Math.floor(n/10);
stride
}
window.alert(sum);
const movie={
    actor:"ms dhoni",
    music:"anirudth",
    producer:"dhoni",
    director:"loki",
    
}
const {actor,music,producer,director}=movie
console.log(music)
console.log(movie.music)
function song({music}){
    return music;
}
console.log(song(movie))
class student{
    constructor (stname,stclass,stage){
        this.name=stname;
        this.class=stclass;
        this.age=stage;

    }
    data(){
        return console.log(`${this.name} is studing in ${this.class} at the age of ${this.age}`);
    }
}
const stu1=new student("hemanth","12std",17);
stu1.data();*//*
const view1=document.getElementById("view1")
console.log(view1);
//const view2=document.getElementsByClassName("view")
//console.log(view2);
const views=document.querySelectorAll(".view");
//view1.style.display="flex";
console.log(views);
const divs=view1.querySelectorAll("div");
console.log(divs);
const samedivs=view1.getElementsByTagName("div");
console.log(samedivs);
const evendivs=view1.querySelectorAll("div:nth-of-type(2n) ");
console.log(evendivs);
const navText=document.querySelector("nav h1");
console.log (navText) ;
navText.textContent = "Hello World!";*/
/*mport ev from"/sc.js";
const view=document.querySelector("#view");
const vi=view.querySelector("#vi");
const h2=vi.querySelector("h1");

vi.addEventListener("click",(event)=>{
    event.target.style.background="blue";
});
/*h2.addEventListener("click",(event)=>{
    event.target.textContent="HAI WELCOME TO MY CHANNEL 🙏🙏🙏🙏😎😎😎😎";
});

h2.addEventListener("click", ev);
console.log(ev);
*/