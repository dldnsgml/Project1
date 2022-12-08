$(function(){
	$("#gnb > ul > li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$("#gnb > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		$(this).parent().parents("li").removeClass("active");
	});

	var mainSwiper = new Swiper(".mainSwiper", {
        pagination: {
          el: ".mainSwiper .swiper-pagination",
        },
		loop:true,
		effect: "fade",
		autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
	$(".banner1").hover(
		function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		}
	);
	$(".banner2").hover(
		function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		}
	);
	$(".banner3").hover(
		function(){
			$(this).addClass("on");
		},
		function(){
			$(this).removeClass("on");
		}
	);

	$(".sitemap > ul > li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}
	);
	$(".list > ul > li").hover(
		function(){
			$(this).addClass("active");
		},
		function(){
			$(this).removeClass("active");
		}	
	);
	$(".list > ul > li > a").focusin(function(){
		$(this).parent().addClass("active");
	});
	$(".list li").focusout(function(){
		$(this).removeClass("active");
	});
});