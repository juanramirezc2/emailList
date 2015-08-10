function emailList(){
  SELF=this;
  SELF._markupDesktop;
  SELF._markupMobile;
  SELF.defaultOptions={
    "desktopId"   :"emailList",
    "contentId"   :"content",
    "bgColor"     :"black", 
    "fontColor"   :"blue",
    "overlayColor":"white"
  }
  //Default Template
  var template = '<div class="emailList__item emailList__item--read">'
  +'<input id="showRead" type="checkbox" name="read" />'
  +'<label> show read</label>'
  +'</div>'
  +'<ul>'
  +'<F for(var index in this) { F>'
    +'<li class="emailList__item">'
    +'<a  class="emailList__link" data-read="<F this[index].read F>" data-content="<F this[index].content F>" href="#" >'
    +'<span class="emailList__from"><F this[index].fromName F></span><span class="emailList__received"><F  this[index].dateReceived F></span>'
    +'<div class="emailList__subject">'
    +'<F this[index].subject F>'
    +'</div>'   
    +'</a>'
    +'</li>'
    + '<F } F>'
    + '</ul>';

    //getter and setter for the markup
    Object.defineProperty(SELF,'markup',{get : function () {
      return SELF._markup; 
    }, 
    set : function (data) {
      SELF._markupDesktop=HugeRender(template,data);
      SELF.render(SELF._markupDesktop,SELF._markupMobile);
    }});

    SELF.render=function(desktopMarkup,mobileMarkup){
     var targetEl=document.getElementById(SELF.options.desktopId);
     targetEl.innerHTML=desktopMarkup;
     var Events=new EmailEvents(targetEl);
    };


    SELF.create=function(Ajaxurl,options){
      SELF.options = typeof options !== 'undefined' ? SELF.options : SELF.defaultOptions;
      SELF.url=Ajaxurl;
      SELF.getData(SELF.url); 
    };
    SELF.getData=function(url){
      Ajax.get(url)
      .success(function (data, xhr) {
        list.markup=data;
      })
      .error(function (data, xhr) {
        console.log(data,xhr);
      });
    };  
    SELF.clearOpened=function(){
      var Opened=document.querySelectorAll("nav > ul >li[data-state=open]");
      for(var Item=0; Item < Opened.length; Item++)  {
        Opened[Item].removeAttribute('data-state');
      }

    };
}
window.list=new emailList();
