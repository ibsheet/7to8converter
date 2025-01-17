window.addEventListener("load",function(){
  // rSlider 생성
  window.mySlider = new rSlider({
    target: '#sampleSlider',
    values: ['Tiny', 'Small', 'Low', 'Normal', 'High', 'Big'],
    tooltip: false,
    labels: ['Tiny', 'Small', 'Low', 'Normal', 'High', 'Big'],
    set: ['Normal'],
    width: '240px',
    range : false,
    onChange: function (val) {
      reSizeFont(val);
    }
  }); 

  legacyCodeTrim();findSheetId()
});


//
function reSizeFont(val) {
  var font;

  switch (val){
    case 'Tiny'   : font = 0.7;   break;
    case 'Small'  : font = 0.8;  break;
    case 'Low'    : font = 0.9;    break;
    case 'Normal' : font = 1.0; break;
    case 'High'   : font = 1.1;   break;
    case 'Big'    : font = 1.2;    break;
    default       : font = 1.3;
  }
  document.querySelectorAll("textarea").forEach((el)=>{
    el.style.fontSize = font+"rem";
    // el.style.lineHeihgt = (font*100)+"%";
    // el.style.wordSpacing = font+"px";
    // el.style.letterSpacing = font/10+"em";
  });
}
