window.onload=function(){
    const toggleButton=document.getElementsByClassName('toggle-button')[0];
    const nlinks= document.getElementsByClassName('r-nav')[0];
    toggleButton.addEventListener('click', () => {
        nlinks.classList.toggle('act');
    })
 
 
      setTimeout(function () {
        buttonClick(); //call your method
        },10000);
        function buttonClick(){
        document.getElementById('show').click();
      }
      
    var modal_res = document.getElementById("modal-res");

    // Get the button that opens the modal
    var btn_res = document.getElementById("show");
    var n=document.getElementById("n");

    // Get the <span> element that closes the modal
    var span_res = document.getElementById("close-2");

    // When the user clicks the button, open the modal 
    btn_res.onclick = function() {
    modal_res.style.display = "block";
    n.style.zIndex="0";
    }

    // When the user clicks on <span> (x), close the modal
    span_res.onclick = function() {
    modal_res.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
    if (event.target == modal_res) {
        modal_res.style.display = "none";
    }
    }
}
window.addEventListener('scroll',()=>{
    let anime=document.querySelectorAll('.reveal');
    let size=window.innerHeight;
    for(var i=0; i<anime.length;i++){
        var top=anime[i].getBoundingClientRect().top;
        if(top<size){
            anime[i].classList.add('active');
            
        }
        else{
            anime[i].classList.remove('active');
        }
    } 
 
});
// document.addEventListener("contextmenu", function(e){
//      e.preventDefault();
//   }, false);


 window.addEventListener('scroll',()=>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        document.getElementsByClassName('navbar')[0].style.boxShadow="0 3px 5px #EEDCC9";
        document.getElementsByClassName('navbar')[0].style.backgroundColor="#FFFFFF";
    }
   else{
        document.getElementsByClassName('navbar')[0].style.boxShadow="none";
        document.getElementsByClassName('navbar')[0].style.backgroundColor="#FFFAFA";
}
   
});
var marker=document.querySelector('#hover');
var item=document.querySelectorAll('.m-links');
var v=document.getElementById('active');
window.addEventListener('load',()=>{
  marker.style.left=v.offsetLeft+"px";
  marker.style.width=v.offsetWidth+"px";
  marker.style.padding="8px";
})

function indicator(e){
  marker.style.left= e.offsetLeft+"px";
  marker.style.width=e.offsetWidth+"px";
  marker.style.padding="8px";
}

item.forEach(link=>{
  link.addEventListener('mouseover',(e)=>{
    indicator(e.target);
  })
  link.addEventListener('mouseout',()=>{
    marker.style.left=v.offsetLeft+"px";
    marker.style.width=v.offsetWidth+"px";
  })
  
})
var mybutton = document.getElementById("top");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function gototop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.getElementById('ec').addEventListener('click',()=>{
    window.location.href="e-commerce-solutions.html";
});
document.getElementById('mb').addEventListener('click',()=>{
  window.location.href="mobile-app-development.html";
});
document.getElementById('gh').addEventListener('click',()=>{
  window.location.href="graphic.html";
});
document.getElementById('ai').addEventListener('click',()=>{
  window.location.href="ai-ml.html";
});
document.getElementById('cs').addEventListener('click',()=>{
  window.location.href="consultancy-services.html";
});
document.getElementById('es').addEventListener('click',()=>{
  window.location.href="educational-services.html";
});
document.getElementById('cls').addEventListener('click',()=>{
  window.location.href="cloud-solutions.html";
});
document.getElementById('cos').addEventListener('click',()=>{
  window.location.href="corporate-services.html";
});
