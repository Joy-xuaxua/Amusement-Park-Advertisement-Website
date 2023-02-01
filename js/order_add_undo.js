const btnArr = document.querySelectorAll('#menu_content button');
const tbody=document.querySelector('#table0 tbody');
const totalqtyTd=document.querySelector('#totalqty');
const trArr=tbody.children;
// console.log("initial children");
// console.log(tbody.children);
// console.log(tbody.lastChild);
for(let i=0;i<btnArr.length;i++){
    btnArr[i].addEventListener('click',function(){
        add(this);
    });
    
}

function add(btn){
    let id=btn.id;
    let idimg=id+'-img';
    let qty=document.querySelector('#'+id+'-qty').value;
    if(qty==0){
        console.log("please select a numnber");
        return;
    }
    //another way to access description 
    // let selectorstr='#'+idimg+' + label';
    //let label=document.querySelector(selectorstr); //select input element follows img element with specifc id
    // let des=label.innerHTML;
    let des=document.querySelector('#'+idimg).alt;
    console.log(des+" "+qty);
    let tr=document.createElement('tr')
    tbody.appendChild(tr);
    let strarr=["<td>",des,'</td>',"<td class='quantity'>",qty,'</td>']
    tr.innerHTML=strarr.join('');
    // console.log("after adding one child");
    // console.log(tbody.children);
    // console.log(tbody.lastChild);

    //type conversion
    // let val=totalqtyTd.innerHTML-0;
    // val+=qty-0;
    // totalqtyTd.innerHTML=val;
    recal();
}

const undoEle=document.getElementById('undo')
undoEle.addEventListener('click',undoFun)

function undoFun(e){
    if(tbody.children.length==0){
        console.log("cannot undo");
    }else{
        tbody.removeChild(tbody.lastChild);
        recal();
    }
    e.stopPropagation();
    // console.log("after deleting the last child");
    // console.log(tbody.children);
    // console.log(tbody.lastChild);
}

function recal(){
    let totalqty=0;
    for(let i=0;i<trArr.length;i++){
        let tr=trArr[i];
        let val=tr.lastChild.innerHTML-0;
        console.log(val);
        totalqty+=val;
    }
    totalqtyTd.innerHTML=totalqty;
}

