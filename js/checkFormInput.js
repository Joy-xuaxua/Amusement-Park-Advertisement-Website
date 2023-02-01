const filedsetEleSelector='#reservation_form'

const filedsetEle = document.querySelector(filedsetEleSelector);

const inputArr=document.querySelectorAll('.form_content input');

const formBtnsEle = document.querySelector(".form_btns")

const dateInputEle=document.querySelector(filedsetEleSelector+" input[name='Date']" )
const timeSelectEle=document.querySelector(filedsetEleSelector+" select[name='Time']" )
const numberInputEle=document.querySelector(filedsetEleSelector+" input[name='No.of Guests']")

const submitEle=document.querySelector(filedsetEleSelector+" input[type='submit']");
submitEle.addEventListener('click',checkValue)

const warningEle=document.createElement('p');
warningEle.innerHTML='Data not completed, please re-enter';
warningEle.style.textAlign='center';

function reserve(date, time, no) {
    if (arguments.length !=3) {
      alert("incorrect arguments detected");
      return;
    }
    if (Math.floor(Math.random()*2) == 0) return false
    else return true;
  }

function checkValue(event){
    for(let i=0;i<inputArr.length;i++){
        console.log(inputArr[i]);
        if(inputArr[i].value===''){
            filedsetEle.insertBefore(warningEle,formBtnsEle);
            event.stopPropogation();
            return;
        }
    }
    const reserved=reserve(dateInputEle.value,timeSelectEle.value,numberInputEle.value)
    if(reserved){
        alert('Reservation done. Thank you.');
    }else{
        alert('Disneyland has reached the maximum number of visitors for the day')
        event.stopPropogation();
    }
}

