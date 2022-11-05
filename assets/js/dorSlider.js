jQuery(document).ready(function () {
    window.addEventListener('load', function (){
        DORBASESLIDER.init();
    });
});

var DORBASESLIDER = {
    init:function(){
        DORBASESLIDER.BuildSlider();
    },
    jssor_1_SlideshowTransitions:function(){
        var jssor_1_SlideshowTransitions = [
            { $Duration: 500, $Delay: 40, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $SlideOut: true, $Easing: $Jease$.$OutQuad },
            { $Duration: 800, y: 0.3, $Cols: 2, $During: { $Top: [0.3, 0.7] }, $ChessMode: { $Column: 12 }, $Easing: { $Top: $Jease$.$InCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 1000, x: -1, y: 2, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.85 } },
            { $Duration: 1200, x: 4, $Cols: 2, $Zoom: 11, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Column: 15 }, $Easing: { $Left: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear }, $Opacity: 2 },
            { $Duration: 1000, x: 4, y: -4, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InQuint, $Top: $Jease$.$InQuint, $Zoom: $Jease$.$InQuart, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InQuint }, $Opacity: 2, $Round: { $Rotate: 0.8 } },
            { $Duration: 1500, x: 0.3, y: -0.3, $Delay: 80, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $During: { $Left: [0.3, 0.7], $Top: [0.3, 0.7] }, $Easing: { $Left: $Jease$.$InJump, $Top: $Jease$.$InJump, $Clip: $Jease$.$OutQuad }, $Round: { $Left: 0.8, $Top: 2.5 } },
            { $Duration: 1000, x: -3, y: 1, $Rows: 2, $Zoom: 11, $Rotate: 1, $SlideOut: true, $Assembly: 2049, $ChessMode: { $Row: 28 }, $Easing: { $Left: $Jease$.$InExpo, $Top: $Jease$.$InExpo, $Zoom: $Jease$.$InExpo, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InExpo }, $Opacity: 2, $Round: { $Rotate: 0.7 } },
            { $Duration: 1000, x: 0.5, y: 0.5, $Zoom: 1, $Rotate: 1, $SlideOut: true, $Easing: { $Left: $Jease$.$InCubic, $Top: $Jease$.$InCubic, $Zoom: $Jease$.$InCubic, $Opacity: $Jease$.$Linear, $Rotate: $Jease$.$InCubic }, $Opacity: 2, $Round: { $Rotate: 0.5 } },
            { $Duration: 1200, x: -0.6, y: -0.6, $Zoom: 1, $Rotate: 1, $During: { $Left: [0.2, 0.8], $Top: [0.2, 0.8], $Zoom: [0.2, 0.8], $Rotate: [0.2, 0.8] }, $Opacity: 2, $Round: { $Rotate: 0.5 } },
            { $Duration: 1200, y: -0.5, $Delay: 30, $Cols: 15, $Opacity: 2, $SlideOut: true, $Formation: $JssorSlideshowFormations$.$FormationCircle, $Easing: { $Top: $Jease$.$InWave, $Opacity: $Jease$.$Linear }, $Round: { $Top: 1.5 } },
            { $Duration: 500, $Delay: 12, $Cols: 10, $Rows: 5, $Opacity: 2, $Clip: 15, $Formation: $JssorSlideshowFormations$.$FormationStraightStairs, $Assembly: 2050, $Easing: { $Clip: $Jease$.$InSine } },
            { $Duration: 800, $Delay: 20, $Clip: 3, $SlideOut: true, $Assembly: 260, $Easing: { $Clip: $Jease$.$OutCubic, $Opacity: $Jease$.$Linear }, $Opacity: 2 }
        ];
        if(typeof DORSLIDER.effect != "undefined" && DORSLIDER.effect == 0){
            jssor_1_SlideshowTransitions = "";
        }
        return jssor_1_SlideshowTransitions;
    },
    jssor_1_SlideoTransitions:function(){
        var jssor_1_SlideoTransitions = [
            [{b:-1,d:1,o:-1},{b:100,d:1000,x:660,o:1,e:{x:27,o:6}}],
            [{b:-1,d:1,o:-1},{b:1000,d:1000,x:660,o:1,e:{x:27,o:6}}],
            [{b:-1,d:1,o:-1},{b:1600,d:1000,x:660,o:1,e:{x:27,o:6}}],
            [{b:-1,d:1,o:-1},{b:2200,d:1000,x:660,y:215,o:1,e:{x:3,y:3}}]
        ];
        return jssor_1_SlideoTransitions;
    },
    jssor_1_options:function(){
        var jssor_1_options = {
            $Idle:parseInt(DORSLIDER.interval),
            $PauseOnHover:DORSLIDER.pause,
            $Loop: DORSLIDER.wrap,
            $AutoPlay: DORSLIDER.autoplay?1:0,
            $SlideDuration: parseInt(DORSLIDER.speed),
            $SlideEasing: $Jease$.$OutQuint,
            $LazyLoading:DORSLIDER.lazyloading,
            $DragRatio:1,
            $SlideshowOptions: {
                $Class: $JssorSlideshowRunner$,
                $Transitions: DORBASESLIDER.jssor_1_SlideshowTransitions(),
                $TransitionsOrder: 1,
                $ShowLink: true
            },
            $CaptionSliderOptions: {
                $Class: $JssorCaptionSlideo$,
                $Transitions: DORBASESLIDER.jssor_1_SlideoTransitions(),
                $Breaks: [
                    [{ d: 2000, b: 5600 }],
                    [{ d: 2000, b: 9300 }],
                    [{ d: 2000, b: 22700 }]
                ]
            },
            $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$,
                $ChanceToShow : parseInt(DORSLIDER.nav),
                $Scale: false
            },
            $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$,
                $ChanceToShow: DORSLIDER.arrow,
                $Scale: false,
                $Cols:1,
                $SpacingX:20,
            }
        };

        return jssor_1_options;
    },
    BuildSlider:function(){
        var jssor_1_slider = new $JssorSlider$("Dor_Full_Slider", DORBASESLIDER.jssor_1_options());
        var MAX_WIDTH = parseInt($( window ).width());
        var MAX_WIDTH_DEFAULT = 1750;
        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);
                if(MAX_WIDTH <= 1700 && MAX_WIDTH >= 1551){
                    expectedWidth = MAX_WIDTH_DEFAULT;
                }
                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }
        ScaleSlider();
        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
    }
}