window.addEventListener("scroll", (e) => {
    console.log("y", window.scrollY);
  })

  let removeTimeOut;

  function clickPosition(e) {
    const target = document.getElementById("clickEffect"),
      a = 40; // #clickEffect의 너비 & 높이 값 / 2
  
    (e.button === 0) && (
      target.style.transform = `translate(${e.clientX - a}px, ${e.clientY - a}px)`,
      target.classList.contains("effect")
      ? (
        clearTimeout(removeTimeOut),
        target.classList.remove("effect"),
        void target.offsetWidth,
        target.classList.add("effect"),
        removeEffect()
      )
      : (
        target.classList.add("effect"),
        removeEffect()
      )
    )
  }
  
  function removeEffect() {
    removeTimeOut = setTimeout(function () {
      document.getElementById("clickEffect").classList.remove("effect")
    }, 500) // #clickEffect.effect::after의 시간 (.5s) * 1000
  }
  
  document.addEventListener("mousedown", clickPosition)

$(document).ready(function(){
    $(".scroll_move").click(function(event){         

        event.preventDefault();

        $('html,body').animate({scrollTop:$(this.hash).offset().top});
    });

    $(window).on("scroll",function(){
        if($(window).scrollTop()>1000){
            $(".btn_bg").addClass("btn_show")
        }else{
            $(".btn_bg").removeClass("btn_show")
        }

        if($(window).scrollTop()>7732){
            $(".btn_bg").removeClass("btn_show")
        }
        if($(window).scrollTop()>11800){
            $(".btn_bg").addClass("btn_show")
        }

        if($(window).scrollTop()>1570){
            $(".scroll_opacity0").addClass("scroll_opacity1")
        }else{
            $(".scroll_opacity0").removeClass("scroll_opacity1")
        }

    })

});