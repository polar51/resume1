



// 호버이벤트
$('.bgBox .gungon').mouseenter(function(){
  $(this).addClass('on')
})
$('.bgBox .gungon').mouseleave(function(){
  $(this).removeClass('on')
})
$('.taeguk').mouseenter(function(){
  $(this).addClass('on')
})
$('.taeguk').mouseleave(function(){
  $(this).removeClass('on')
})


// 클릭 이벤트
// $('#aboutMe').hide()
$('.taeguk').on('click',function(e){
  e.preventDefault()
  $('#aboutMe').addClass('on')
})
$('#aboutMe .top i').on('click',function(){
  $('#aboutMe').removeClass('on')
})

//어바웃미 호버 
$('#aboutMe .inner .left .card').on('mouseenter',function(){
  $('.card').css({
    transform:'rotateY(-180deg)'
  })
})
$('#aboutMe .inner .left .card').on('mouseleave',function(){
  $('.card').css({
    transform:'rotateY(0deg)'
  })
})


//skill 클릭
$('.gamri2').on('click',function(e){
  e.preventDefault()
  $('#skill').addClass('on')
  // $('#skill .skillContainer > div').addClass('on')
  count(70, '.html',25)
  count(60, '.css3',30)
  count(30, '.javascript',40)
  count(50, '.jquery',35)
  count(20, '.react',37)
})
$('#skill .top i').on('click',function(){
  $('#skill').removeClass('on')
  // $('#skill .skillContainer > div').removeClass('on')
  $('#skill .skillContainer > div').find('.score').css({
    height:'0%'
  })
})


//skill 점수 이벤트
function count(jumsu, cname,time) {
  let num = 0; 
  var stop = setInterval(function(){
      num++;
      if (num<=jumsu) {
          $(cname).find('.myScore').text(num+'%')
          $(cname).find('.score').css({
            height:jumsu+'%'
          })
      } else {
          clearInterval(stop)
      }
  }, time)
}

// 포트폴리오 클릭
$('.gamri3').on('click',function(e){
  e.preventDefault()
  $('#portfolio').addClass('on')
})
$('#portfolio .top i').on('click',function(){
  $('#portfolio').removeClass('on')
})


//콘탠트미 클릭
$('.gamri4').on('click',function(e){
  e.preventDefault()
  $('#contactMe').addClass('on')
})
$('#contactMe .top i').on('click',function(){
  $('#contactMe').removeClass('on')
})