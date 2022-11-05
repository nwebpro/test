/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */

var DORTHEME = {
	idShop:(typeof DOR != "undefined" && typeof DOR.id_shop != "undefined" && DOR.id_shop != null)?DOR.id_shop:1,
	init:function(){
		DORTHEME.ScrollFixedMenu();
		DORTHEME.UserInfoEvent();
		DORTHEME.CarouselBrand();
		DORTHEME.DetachSelection();
		DORTHEME.SocialShare();
		
	    var swiper = new Swiper('.dor-about-us-testimonial-slider', {
	      	slidesPerView: 3,
	      	spaceBetween: 30,
	      	loop: true,
	      	slidesPerGroup:3,
	      	pagination: {
	        	el: '.swiper-pagination',
	        	clickable: true,
	      	},
	      	breakpoints: {
		        1024: {
		          slidesPerView: 3,
		          spaceBetween: 10,
		        },
		        768: {
		          slidesPerView: 2,
		          spaceBetween: 10,
		        },
		        300: {
		          slidesPerView: 1,
		          spaceBetween: 0,
		        },
		      }
	    });

	    var swiper = new Swiper('#subcategories', {
	      	slidesPerView: 6,
	      	spaceBetween: 30,
	      	loop: false,
	      	slidesPerGroup:6,
	      	pagination: {
	        	el: '.swiper-pagination',
	        	clickable: true,
	      	},
	      	breakpoints: {
		        1024: {
		          slidesPerView: 6,
		          spaceBetween: 30,
		        },
		        768: {
		          slidesPerView: 4,
		          spaceBetween: 30,
		        },
		        530: {
		          slidesPerView: 3,
		          spaceBetween: 30,
		        },
		        370: {
		          slidesPerView: 2,
		          spaceBetween: 20,
		        },
		        300: {
		          slidesPerView: 2,
		          spaceBetween: 20,
		        },
		      }
	    });
	},
	SocialShare: function() {
        var checkBuildSocial = $(".button-share-social").find("a").length;
        if (typeof checkBuildSocial != "undefined" && checkBuildSocial > 0)
            $('a.share').shares();
    },
	CarouselBrand:function(){
		var checkData = $(".dor-brand-logo-data").html();
		var checkSlick = $(".dor-brand-logo-data").hasClass("slick-slider");
		if(typeof checkData != 'undefined' && checkData.length > 0 && !checkSlick){
		    $(".dor-brand-logo-data").slick({
		        dots: false,
		        arrows: false,
		        infinite: false,
		        rows:1,
		        autoplay: true,
		        autoplaySpeed: 5000,
		        prevArrow:"<button type='button' class='dor-slick-arrow slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
	            nextArrow:"<button type='button' class='dor-slick-arrow slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
		        slidesToShow: 6,
		        slidesToScroll: 6,
		        responsive: [
		        {
		          breakpoint: 1500,
		          settings: {
		            slidesToShow: 6,
		            slidesToScroll: 6
		          }
		        },
		        {
		          breakpoint: 1200,
		          settings: {
		            slidesToShow: 5,
		            slidesToScroll: 5
		          }
		        },
		        {
		          breakpoint: 992,
		          settings: {
		            slidesToShow: 4,
		            slidesToScroll: 4
		          }
		        },
		        {
		          breakpoint: 631,
		          settings: {
		            slidesToShow: 3,
		            slidesToScroll: 3
		          }
		        },
		        {
		          breakpoint: 421,
		          settings: {
		            slidesToShow: 2,
		            slidesToScroll: 2
		          }
		        },
		        {
		          breakpoint: 321,
		          settings: {
		            slidesToShow: 2,
		            slidesToScroll: 2
		          }
		        }]
		    });
	    }
	},
	ShowPopupScre:function(){
		if((typeof DOR != "undefined" && typeof DOR.dorSubscribe != "undefined" && parseInt(DOR.dorSubscribe) == 1)){
			var localStorPopup = localStorage.getItem("popupScrAgain-"+DORTHEME.idShop);
	        if(localStorPopup == null && parseInt(localStorPopup) != 1 && typeof sessionStorage['popupScr-'+DORTHEME.idShop] == "undefined" && sessionStorage['popupScr-'+DORTHEME.idShop] != 1){
	        	setTimeout(function(){
					$('.subscribe-me').bPopup({
			            speed: 450,
			            transition: 'slideDown'
			        });
				},1000);
	        }
	        if(typeof sessionStorage['popupScr-'+DORTHEME.idShop] == "undefined" && sessionStorage['popupScr-'+DORTHEME.idShop] != 1){
	        	sessionStorage['popupScr-'+DORTHEME.idShop] = 1;
	        }
	        jQuery("input[name='notShowSubs']").change(function(){
	        	if($(this).is(':checked')){
	        		localStorage.setItem("popupScrAgain-"+DORTHEME.idShop,1);
	        	}else{
	        		localStorage.removeItem("popupScrAgain-"+DORTHEME.idShop);
	        	}
	        });
	        $("#dorNewsletter-input").keyup(function(){
				var keysearch = $(this).val();
				$("#main-newsletter-footer input[name='email']").val(keysearch);
			});
        }
	},
	UserInfoEvent:function(){
		$(".icon-user-info").unbind("click");
		$(".icon-user-info").click(function(){
			var checkOpen = $(".user-info").hasClass('doropen');
			if(!checkOpen){
				$(".user-info").addClass('doropen');
			}else{
				$(".user-info").removeClass('doropen');
			}
			return false;
		});

		jQuery(document).click(function (event) {
            if (!jQuery(event.target).is(".icon-user-info, .user-info *")) {
                $(".user-info").removeClass('doropen');
            }
        });
	},
	ScrollFixedMenu:function(){
		if(typeof DOR != 'undefined' && DOR.dorFloatHeader == 0) return false;
		var headerHeight = $("header").height();
		var headerSlider = $("#dorSlideShow").height();
		if(typeof DOR != "undefined" && typeof DOR.dorHeaderSkin != "undefined" && DOR.dorHeaderSkin == "header02"){
			headerSlider = 0;
		}
		$(window).bind('scroll', function() {
	     var navHeight = headerHeight + headerSlider;
	       if ($(window).scrollTop() > navHeight) {
	         $('#header').addClass('fixed');
	         $("#header").css("top",-navHeight);
	       }
	       else {
	         $('#header').removeClass('fixed');
	         $('#header').removeClass('fixed-tran');
	         $("#header").css("top","auto");
	         $("#dor-verticalmenu").removeClass("open");
	       }
	       if($(window).scrollTop() > (navHeight + 0)) {
	       	$('#header').addClass('fixed-tran');
	       	$("#header").css("top",0);
	       }
	    });
	},
	DetachSelection:function(){
		if(typeof DOR != "undefined" && typeof DOR.dorHeaderSkin != "undefined" && DOR.dorHeaderSkin == "header01"){
			var languageSelect = $("#_desktop_language_selector").detach();
			var currencySelect = $("#_desktop_currency_selector").detach();
			$("#dor-header-selection-content").append(languageSelect).append(currencySelect);
			$(".dor-header-selection-icon").unbind("click");
			$(".dor-header-selection-icon").click(function(){
				var checkOpen = $(".dor-header-selection").hasClass('doropen');
				if(!checkOpen){
					$(".dor-header-selection").addClass('doropen');
				}else{
					$(".dor-header-selection").removeClass('doropen');
				}
				return false;
			});

			jQuery(document).click(function (event) {
	            if (!jQuery(event.target).is(".dor-header-selection, .dor-header-selection *")) {
	                $(".dor-header-selection").removeClass('doropen');
	            }
	        });
	        var checkSelect = $("#dor-header-selection-content").html();
	        if(typeof checkSelect != "undefined" && checkSelect.length <= 0){
	        	$(".dor-header-selection").remove();
	        }
        }
	},
};

