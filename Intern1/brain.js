let video=document.querySelector(".videos");
let doc=document.getElementById("clear");
let docs=document.getElementById("clears");
let loop;
let flag=0;
let cit=("The World Of The Jump Off","It has begun");
// Average time this month for sunset is 18:29 -18:35,just to be safe 19 is taken as midnight time

function ChangeText(){
  document.getElementById("title").innerHTML ="It has begun";
  document.getElementById("title").style.opacity = 0;
  document.getElementById("title").style.opacity = 1;
  setTimeout("ChangeText()",2000);
  }
function ChangeText2(){
    document.getElementById("title").innerHTML = "The World Of The Jump Off";
    document.getElementById("title").style.opacity = 0;
    document.getElementById("title").style.opacity = 1;
    setTimeout("ChangeText2()",2000);
  }
function checkhour() {
    const time=new Date();
    const hour=time.getHours();
    const mins=time.getMinutes();
    const sec=time.getSeconds();
    console.log(hour);
    

    if(hour>=19){                             //To test the midnight function when it is not midnight change the <-19 to your present hour
        video.play();
        
        flag=1;
        doc.classList.add("none");
        docs.classList.add("none");
        
        document.querySelector(".overlay").classList.add("noe");
        ChangeText();
        
    }else if(flag==1){
        video.pause();
        doc.classList.remove("none");
        docs.classList.remove("none");
        ChangeText2();
        flag=0;
    }
}
loop=setInterval(checkhour,1000);


