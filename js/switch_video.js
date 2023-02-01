const videoEle=document.getElementById('dvideo');

videoEle.addEventListener('ended',switchSrc,false);
console.log(videoEle.onended);
let srcArr=[];
srcArr.push("https://personal.cs.cityu.edu.hk/~cs2204/video/Castle.mp4");
srcArr.push("https://personal.cs.cityu.edu.hk/~cs2204/video/Musical_Journey.mp4");
let index=0;

// videoEle.onended=switchSrc

function switchSrc(){
    console.log("hi");
    index=(index+1)%srcArr.length;
    videoEle.src=srcArr[index];
    console.log(videoEle.src);
    videoEle.load();
    try{
        videoEle.play();
    } catch(err){
        console.log(err);
    }
    
}