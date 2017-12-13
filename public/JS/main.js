var image, yPos;

function parallex(){
  yPos = window.pageYOffset;
  image = document.getElementById('image');
  image.style.top = window.pageYOffset * .5 +'px';
}
window.addEventListener('scroll', parallex);


$(".tryMe-button").click(function(){
    alert("The button was clicked.");
});

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 1000) {
    $('.dividorx1').css({
      'background-color':'rgb(41, 45, 53)',
      'background-blend-mode':'multiply',
      'transition':'1.5s ease'
    });
  } else {
    $('.dividorx1').css({
      'background-size':'',
      'background-color':'',
      'background-blend-mode':''
    });
  }
});
