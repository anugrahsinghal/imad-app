//new code
var button = document.getElementById("counter");

button.onclick = function(){
  
  //Create a requets object
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE) {
        //take some action
        if(request.status === 200){
            var counter = request.responseText;
            //render variable to correct span
             var span= document.getElementById('count');
             span.innerHTML = counter.toString();
        }
    } 
    //not done yet
  };
  
  //Make the request
  request.open('GET', 'http://anugrahsinghal1.imad.hasura-app.io/counter', true);
  request.send(null);
};







//old code

/*console.log('Loaded!');

//chhanbge the text of the main text

var element = document.getElementById('main-text');

element.innerHTML = 'New Value';

//move the image


var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft = marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};
*/






