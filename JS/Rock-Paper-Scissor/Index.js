
let userscore=0;
let compscore=0;
const main=document.querySelectorAll("#q");
const msg=document.querySelector("#msgq")
const us=document.querySelector("#user")
const co=document.querySelector("#comp")



const compchoice=()=>{
    const option=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return option[randidx];
};

const draw=()=>{
    console.log("draw");
    msg.innerText="Draw play again";
    msg.style.backgroundColor="brown"
};
const showwinner=(userwin, id, compchoicee)=>{
    if(userwin){
        console.log("you won");
        userscore++
        us.innerText=userscore;
        msg.innerText=`You win your ${id} beats ${compchoicee}`;
        msg.style.backgroundColor="green"
        
    }else{
        console.log("you lose");
        compscore++;
        co.innerText=compscore
        msg.innerText=`You lose ${compchoicee} beats your ${id}`;
        msg.style.backgroundColor="blue"
          
    }

}





const playgame=(id)=>
{
console.log("user choice=",id)
const compchoicee=compchoice();
console.log("compchoice=",compchoicee);

if(id===compchoicee){
    draw();
}
else{
    let userwin=true;
    if(id==="rock"){
        userwin===compchoicee==="paper" ? false : true;
    }else if(id==="paper"){
       userwin= compchoicee==="scissor" ? false : true;
    }else{
      userwin=compchoicee==="rock" ? false : true;
    }
    showwinner(userwin,id,compchoicee)
}

};



main.forEach((q)=>{
   q.addEventListener("click",()=>{
         const id=q.getAttribute("class");
    playgame(id);
    });
});