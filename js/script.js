// 270000001
var countDownDate = new Date().getTime() + 270000001;
var x = setInterval(function() {
  var now = new Date().getTime();
  var inputs = document.getElementsByTagName("input");
  var textareas = document.getElementsByTagName("textarea");
  var links = document.getElementsByTagName("a");
  var distance = countDownDate - now;
  var minutes = Math.floor(((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))*60);
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("timer-number").innerHTML = minutes+":"+"<span>"+seconds+"</span>";
if(seconds < 10){
        seconds = "0" + seconds;
        document.getElementById("timer-number").innerHTML = minutes+":"+"<span>"+seconds+"</span>";
}
if(minutes < 10){
    minutes = "0" + minutes;
    document.getElementById("timer-number").innerHTML = minutes+":"+"<span>"+seconds+"</span>";
  }
if (distance < 0) {
  clearInterval(x);
  document.getElementById("timer-number").innerHTML = "<span class='expired'>Vaxt bitti!</span>";
  document.getElementById("exampleModal").classList.add('show');
  document.getElementById("modal-backdrop").classList.add('show');
  for (i = 0; i < inputs.length; i++) {
    inputs[i].classList.add('not-allow');
    inputs[i].disabled = true;
  }
  for (i = 0; i < textareas.length; i++) {
    textareas[i].classList.add('not-allow');
    textareas[i].disabled = true;
  }
  for (i = 0; i < links.length; i++) {
    links[i].classList.add('not-allow');
    links[i].addEventListener('click', function (e) {
     e.preventDefault();
  }, false);
  }
}
}, 1000);

$(document).ready(function(){
  $('.close-timer').click(function(){
    $(this).toggleClass('fa-times').toggleClass('fa-chevron-right');
    $('#timer-fixed').toggleClass('leftcl');
  });
  $('.step-next').click(function(){
    $('.a-questions').addClass('d-none');
    $('.b-questions').removeClass('d-none');
    $('.two').addClass('active-num');
    $('.line').addClass('active-line');
  });
  $('.step-prev').click(function(){
    $('.a-questions').removeClass('d-none');
    $('.b-questions').addClass('d-none');
    $('.two').removeClass('active-num');
    $('.line').removeClass('active-line');
  });
  $('.close').click(function(){
    $('#exampleModal').removeClass('show');
    $('#modal-backdrop').removeClass('show');
    $('#exampleModal').removeClass('show').addClass('d-none');
    $('#modal-backdrop').removeClass('show').addClass('d-none');
  });
  $('.variants input').each(function(e){
    $(this).attr('id',"ques" + e);
    $(this).next('label').attr('for',"ques" + e);
  });
});