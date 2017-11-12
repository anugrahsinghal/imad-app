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

//SUbmit name


var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    
    
    //Create a requets object
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE) {
        //take some action
        if(request.status === 200)
        {
            //capture list of names sna render as a list
              var names=request.responseText;
              names = JSON.parse(names);
              var list = '';
              for(var i=0;i<names.length;i++){
                  list += '<li>' + names[i] + '</li>';
              }
              var ul = document.getElementById('nameList');
              ul.innerHTML=list;
        }
    } 
    //not done yet
  };
  
          //Make the request
        var nameInput = document.getElementById('name');
        var name = nameInput.value;
  request.open('GET', 'http://anugrahsinghal1.imad.hasura-app.io/submit-name?name=' + name, true);
  request.send(null);
  //make request f=to server and send name
  
};

var submit1 = document.getElementById('submit_cmnt');
submit1.onclick = function() {
    
    
    //Create a requets object
  var request = new XMLHttpRequest();
  //capture the response and store it in a variable
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE) {
        //take some action
        if(request.status === 200)
        {
            //capture list of names sna render as a list
              var comments=request.responseText;
              comments = JSON.parse(comments);
              var cmntlist = '';
              for(var i=0;i<comments.length;i++){
                  cmntlist += '<li>' + comments[i] + '</li>';
              }
              var ul = document.getElementById('commentList');
              ul.innerHTML=cmntlist;
        }
    } 
    //not done yet
  };
  
          //Make the request
        var commentInput = document.getElementById('comment');
        var comment = commentInput.value;
  request.open('GET', 'http://anugrahsinghal1.imad.hasura-app.io/:articlename?comment=' + comment, true);
  request.send(null);
  //make request f=to server and send name
  
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






