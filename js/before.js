/*
 * @desc    : main model
 * @author  : hdg
 * @data    : 2013-05-28
 */
define(function(require, exports, module) {

    require('jquery.slider');

    var stackBlur = require('stackblur');
    var A = require('animate');

    var isSliding = false;
    var radius = 10;
    var $bxSlider = $('#bxslider').bxSlider({
        "onSliderLoad": function(){
            initMouseOverEvent();
            $bxSlider.find('li')
                .eq(1).find('img')
                .each( function(i , dom){
                    skackBlurImage( $(dom) , radius );
                });
        }
        ,"onSlideBefore": function(){
            isSliding = true;
        }
        ,"onSlideAfter": function( $slideElement , oldindex , newindex){
            $slideElement.find('img')
                .each(function( i , dom ){
                    skackBlurImage( $(dom) , radius );
                });
            isSliding = false;
        }
    });

    var isSupportCanvas = (function(){
        return !!document.createElement('canvas').getContext;
    })();

    function skackBlurImage( $img , radius ){

        var $can = $img.data('__canvas__');
        var pos = $img.data('__pos__');

        if( $can ) return ;
        $can = $('<canvas>')
            .insertAfter( $img )
            .attr({
                id: 'can_' + ( + new Date()) + Math.random(),
                width: $img.width(),
                height: $img.height()
            })
            .css({
                position: 'absolute' ,
                zIndex: 1,
                top: 0,
                left: 0,
                opacity: 0
            });

        pos = {
                id: $img.attr('id') || 'img_' + ( + new Date()) + Math.random(),
                width: $img.width(),
                height: $img.height()
            };
        $img.data( '__canvas__' , $can )
            .data('__pos__' , pos)
            .attr( 'id' , pos.id )
            .parent()
            .css({
                position: 'relative'
            });
        stackBlur.stackBlurImage( $img[0] , pos , $can[0], radius , false );
    }
    function opacityStackBlur ( $img , percent ){
        var $canvas = $img.data('__canvas__');
        $canvas.css( 'opacity' , percent );
    }
    function initMouseOverEvent (){
        // bind event
        var time = 500;
        var animate = null;
        var $bef_dom = null;
        var half = ( 950 - 10 ) / 2;
        var max = ( 950 - 10 ) * 2 / 3;
        var min = ( 950 - 10 ) * 1 / 3;
        var slide = function( width ){
            if( !animate ){
                animate = new A.Animate([ 470 ] , [ width ] , time , '' , function( arr ){
                    // change element
                    $bef_dom.css( 'width' , arr[0] );
                    $bef_dom.next()
                        .css( 'width' , 950 - arr[0] - 10 );

                    // blur the image
                    if( isSupportCanvas ){
                        opacityStackBlur( arr[0] < ( 950 - 10 ) / 2 ?
                            $bef_dom.find('img') :
                            $bef_dom.next().find('img') ,
                            Math.abs( ( half - arr[0] ) / (half - min )) )
                        /*
                        skackBlurImage( arr[0] < ( 950 - 10 ) / 2 ?
                            $bef_dom.find('img') : $bef_dom.next().find('img') , Math.abs( lastBlurRadius ) );
                */
                    }
                });
            } else {
                animate.turnTo( [width] );
            }
            /*$dom
                .stop( true , false )
                .animate({
                    width: width
                } , time );

            $dom[ $dom.hasClass('pic_aft') ? 'prev' : 'next']()
                .stop( true , false )
                .animate({
                    width: 950 - width - 10
                } , time);
*/
        }
        $('#bxslider').on('mouseover' , '.pic_bef,.pic_aft' , function(){
            if( isSliding ) return;
            var isBefore = $(this).hasClass('pic_bef');
            $bef_dom =  isBefore ? $(this) :$(this).prev();
            slide( isBefore ? 950 * 2 / 3 - 5 : 950 / 3 - 5 );
        });

        $('#bxslider').on('mouseout' , '.pic_bef,.pic_aft' , function(){
            if( isSliding ) return;
            slide( 950 / 2 - 5 );
        });
    }
});
