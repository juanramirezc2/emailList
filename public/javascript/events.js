function EmailEvents(mainElem){
  this.mainDomElem=mainElem;
  this.init(this.mainDomElem);
}
EmailEvents.prototype={
  constructor:EmailEvents,
  init:initFunc,
  checkRead:checkReadFunc
}
function initFunc(el){
  var Self=this;
  var links=el.querySelectorAll(".emailList__link");
  var showmore=document.getElementById("showRead");
  for(var i=0;i<links.length;i++){
    links[i].addEventListener("click",function(e){
      document.getElementById("from").innerHTML="from: "+this.dataset.fromname;
      document.getElementById("subject").innerHTML="subject";
      document.getElementById("content").innerHTML=this.dataset.content;
      document.getElementById("to").innerHTML=this.dataset.content;
      var subject=this.querySelector(".emailList__subject").innerHTML;
      document.getElementById("subject").innerHTML="subject: "+subject;
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

