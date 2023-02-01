const labelArr=document.getElementById('menu_label').children;
const menuArr=document.getElementById('menu_block').children;

for(let i=0;i<labelArr.length;i++){
    labelArr[i].style['background-color']='gray';
    labelArr[i].addEventListener('click',function(){display(this)});
}

const tickeLabelEle=document.getElementById('ticketLabel');
display(tickeLabelEle);

function display(clicked){
    
    clicked.style['background-color']="white";

    for(let i=0;i<labelArr.length;i++){
        if(labelArr[i]!=clicked){
            labelArr[i].style['background-color']="antiquewhite";
            menuArr[i].style.display='none';
        }
    }

    const typestr=clicked.id.split('L')[0];
    console.log(typestr);
    document.getElementById('menu_'+typestr).style.display='block';
}