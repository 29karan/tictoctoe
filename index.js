turnX = true;
turnStyle = {
  "color": "#70e000",
  "font-size": "300px",
  "margin-top": "38%",
  "text-shadow": "5px 5px 50px #39FF14"
};

var elements = document.querySelectorAll('td');
elements.forEach( (element) => {
  // element.addEventListner("click", (e) => {
  //   console.log("hello")
  // })
  console.log(element);
});


function toggle() {
  turnX = !turnX;
}

if (turnX){
  x = document.querySelector('#x');
  Object.assign(x.style, turnStyle);
}else{
  o = document.querySelector('#o');
  Object.assign(o.style, turnStyle);
}
