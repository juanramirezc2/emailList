function EmailEvents(mainElem){
  this.mainDomElem=mainElem;
  this.init(this.mainDomElem);
}
EmailEvents.prototype={
  constructor:EmailEvents,
  init:initFunc,
  checkRead:checkReadFunc,
  updateHour:updateHour
}
function initFunc(el){
  var Self=this;
  var links=el.querySelectorAll(".emailList__link");
  var showmore=document.getElementById("showRead");
  for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
      document.getElementById("subject").innerHTML="subject";
      document.getElementById("content").innerHTML=this.dataset.content;
      document.getElementById("to").innerHTML="to : not provided";
      var from=this.querySelector(".emailList__from").innerHTML;
      document.getElementById("from").innerHTML="from: "+from;
      var subject=this.querySelector(".emailList__subject").innerHTML;
      document.getElementById("subject").innerHTML="subject: "+subject;
      var received=this.querySelector(".emailList__received").innerHTML;
      document.getElementById("received").innerHTML="received: "+received;
      e.preventDefault();
    }
    );
  }
  showmore.addEventListener("click",function(){
  if (this.checked) {
    Self.checkRead(links,"show");
    } 
   else{
     Self.checkRead(links,"hide");
   }
   
  });
  this.updateHour(links);

}
function updateHour(links){
  for(var i=0;i<links.length;i++){
    var time=links[i].querySelector(".emailList__received");
    var diff=Date.diff(Date.now(),Number(time.innerHTML));
    var diffFormat=diff.days +"days,"+diff.hours+" hours,"+diff.minutes+" minutes Ago";
    time.innerHTML=diffFormat;
    console.log(diffFormat);
  }
}
function checkReadFunc(links,state){
  for(var i=0;i<links.length;i++){
    if(links[i].dataset.read==="true" && state==="show"){
     links[i].classList.add("show");
    }
    else if(links[i].dataset.read==="true" && state==="hide"){
    console.log( links[i].classList);
      links[i].classList.remove("show");
    }
  }
}

