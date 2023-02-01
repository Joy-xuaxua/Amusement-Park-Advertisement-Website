// window.onload='displayMessage()'
const mes=document.getElementById('message');
const mesArr=["DISNEY PREMIER ACCESS & 1-DAY TICKET COMBO, STARTING FROM HK $798", 
"DISNEY PREMIER ACCESS & 8-ATTRACTIONS WITH 1 SHOW, STARTING FROM HK $379", 
"DISNEY PREMIERACCESS - 1-ATTRACTION, STARTING FROM HK $79"]

// setTimeout("console.log('hi');setTimeout('console.log(null);',10*1000);",10*1000);

function displayMessage(){
    const ranNo=Math.floor(Math.random()*mesArr.length);
    const mesEle=document.getElementById('message')
    const next=nextNum(ranNo,mesArr.length);
    const nextnext=nextNum(next,mesArr.length);
    
    function modifyMes(index){
        mesEle.innerHTML=mesArr[index];
    }

    function displayDuring9s(){
        modifyMes(ranNo);//console.log(ranNo);
        setTimeout(()=>{
            modifyMes(next);//console.log(next);
        },3*1000);
        setTimeout(()=>{
            modifyMes(nextnext);//console.log(nextnext);
        }, 6*1000);
    }
    displayDuring9s();
    setInterval(displayDuring9s,9*1000);
    // function f1(){
    //     setTimeout(()=>{
    //         modifyMes(nextnext);
    //         console.log("f1 is executed");
    //     },3*1000);
    // }

    // function f2(){
    //     modifyMes(next);
    //     console.log("f2 is executed");
    //     f1();
    // }

    // setTimeout(f2,3*1000);
}

function nextNum(i,len){
    let next = i+1;
    if(next==len){
        next=0;
    }
    return next;
}


