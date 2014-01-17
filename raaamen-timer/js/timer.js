var RamenTimer = function(){
  this.remindTime=0;
  this.menType=2;
}

RamenTimer.prototype={
  setMenType: function(type){
    this.menType=type;
  },
  start: function(){
    if(this.menType===1){
      setTimeout("timeLimit()", 100);
    }else if(this.menType===2){
      setTimeout("timeLimit()", 10000);
    }else{
      setTimeout("timeLimit()", 30000000);
    }
  }

}
  function timeLimit(){
    var audio = new Audio;
    audio.autoplay = true;
    audio.loop     = false;
    audio.src = "famima.mp3";       // FireFoxはmp3は再生できないのでwavファイル等を使用
    audio.load();
    audio.play();
  }



$(function(){
  timer=new RamenTimer();
  $(this).click(fcuntion(){
    time.start();
  });

});

