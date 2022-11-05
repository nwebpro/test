jQuery(document).ready(function(){
    parentClickAble();
 $(window).resize(parentClickAble);
 DORMENU.init();
});

function parentClickAble()
{
 if($(window).width() >= 0){
     $('#dor-top-menu a.dropdown-toggle').click(function(){
         var redirect_url = $(this).attr('href');
         window.location = redirect_url;
     });
 }
}

var DORMENU = {
 init:function(){
     DORMENU.SetActiveMenu();
     DORMENU.ToggleMenuLine();
     DORMENU.AddLogoMobile($( window ).width());
     DORMENU.OpenClose();
 },
 AddLogoMobile:function($withScreen){
     if($withScreen <= 991){
         var getLogo = $("#header .dor-w-logo .logo").attr("src");
         $("#dor-top-menu .mobile-logo-menu .logo").attr("src",getLogo);
     }
 },
 SetActiveMenu:function(){
     var urlPath = location.pathname;
     var urlFull = location.href;
     var check = jQuery('ul.megamenu > li > a[href="'+urlFull+'"]').html();
     if(typeof check != "undefined"){
         jQuery('ul.megamenu > li > a[href="'+urlFull+'"]').closest("li").addClass("active");
     }else{
         jQuery('a[href="'+urlPath+'"]').closest(".widget-heading").addClass("active");
         jQuery('a[href="'+urlFull+'"]').closest(".widget-heading").addClass("active");
         jQuery('a[href="'+urlPath+'"]').closest("li").addClass("active");
         jQuery('a[href="'+urlFull+'"]').closest("li").addClass("active");
         jQuery('a[href="'+urlFull+'"]').closest("li.parent.dropdown").addClass("active");
         jQuery('a[href="'+urlFull+'"]').closest("li").parents("li").addClass("active");
     }
     
     

 },
 CheckTypeMenu:function(){
     $(".dor-megamenu .widget-inner.block_content").each(function(){
         var check = $(this).closest(".widget-content > .block").find(".widget-heading.title_block").html();
         if(typeof check == "undefined"){
             $(this).closest(".widget-content").addClass("menu-none-title");
         }
     });
 },
 OpenClose:function(){
     var htmlOvelay = '<div class="dor-overlay"></div>';
     jQuery(".open_menu").click(function(){
         jQuery( "#dor-top-menu" ).animate({
             left: 0,
         }, 500);
         jQuery("body").addClass("dor-mobile");
         jQuery('body > main .dor-overlay').remove();
         jQuery(htmlOvelay).insertAfter('body > main .dor-header-top-menu');

     });

     jQuery("body").on("click",".close_menu, .dor-overlay",function(){
         jQuery( "#dor-top-menu" ).animate({
             left: -260,
         }, 500);
         jQuery("body").removeClass("dor-mobile");
         jQuery('body > main .dor-overlay').remove();
     });
 },
 ToggleMenuLine:function(){
     jQuery(".caretmobile, .link-cate-custom, #dor-top-menu .navbar-nav > li > .dropdown-menu li.parent.dropdown-submenu").click(function(){
         var checkThis = $(this).hasClass("dor-menu-open");

         var checkClick = jQuery(this).hasClass("link-cate-custom");
         if(checkClick){
             var checkSublinks = jQuery(this).parent(".widget-heading").parent(".widget-links").find(".panel-group").html();
         }
         var checkStatus = jQuery(this).parent("li").hasClass("dor-menu-open");
         jQuery(this).parent("li").parent("ul").find("li").removeClass("dor-menu-open");
         
         //jQuery(".dor-megamenu .navbar-nav > li").removeClass("dor-menu-open");
         var checkStatusWidget = jQuery(this).closest(".widget-content").hasClass("dor-menu-open");
         jQuery(this).closest("li.dor-menu-open").find(".widget-content").removeClass("dor-menu-open");

         if(!checkStatus)
             jQuery(this).closest("li").addClass("dor-menu-open");
         else
             jQuery(this).closest("li").removeClass("dor-menu-open");
         if(checkStatusWidget){
             jQuery(this).closest(".widget-content").removeClass("dor-menu-open");
         }else{
             jQuery(this).closest(".widget-content").addClass("dor-menu-open");
         }
         if(checkThis){
             $(this).removeClass("dor-menu-open");
         }
         DORMENU.CheckTypeMenu();
     });
 }
};
