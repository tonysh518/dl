/*
 * @desc    : main model
 * @author  : hdg
 * @data    : 2013-05-28
 */
define(function(require, exports, module) {

    require('jquery.slider');
    require('jquery.easing');
    require('jquery.fancybox');
    require('jquery.isotope');
    require('jquery.address');
    require('cloudzoom');
    require('jquery.form');
    require('jquery.validate');
    require('jquery.hoverIntent');
    require('jquery.ui');

    // for main page
    $('.mod_slide,.mod_aboutslide').bxSlider({
        useCSS:false,
        easing:'easeOutQuart',
        auto:true,
        speed:800,
        "onSliderLoad": function(){
            $('.mod_slide').animate({opacity:1});
        }
    });
    // for list page
    $(function(){
        $('.project_item').hoverIntent(function(){
            $(this).find('.pro_hover')
                .show()
                .css({
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    overflow: 'hidden'
                })
                .find('.pro_shade')
                .css({
                    top: '100%'
                })
                .animate({
                    top: 0
                } , 300 , 'easeOutQuart' , function(){
                    var _prev = $(this).prev();
                    var _top = ($(this).height() - ((_prev.find('br').length+1)*36+40))/2;
                    $(this).prev()
                        .animate({
                            'top' : _top,
                            'opacity': 1
                        } , 300,'easeOutQuart');
                })
                .prev()
                .css({
                    'top': '-20%',
                    'opacity': 0
                });
        },
            function(){
                $(this).find('.pro_hover')
                    .fadeOut();
            }
        )
    });

    var stackBlur = require('stackblur');
    var A = require('animate');

    var isSliding = false;
    var radius = 10;

    var $bxSlider = $('#bxslider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,

        "onSliderLoad": function(){
            initMouseOverEvent();
            $bxSlider.find('li')
                .eq(1).find('img')
                .each( function(i , dom){
                    skackBlurImage( $(dom) , radius );
                });
            var path = '../'+$bxSlider.attr('data-prev-path');
            var title = $bxSlider.attr('data-prev-title');
            $('.bx-controls').append('<a title="'+title+'" class="prev-node" href="'+path+'">prev node</a>');
            $('.prev-node').tooltip({
                track: true
            });
            $('#bxslider').animate({opacity:1});
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
            $('.prev-node').remove();
            $('.next-node').remove();
            if($bxSlider.getSlideCount() === newindex+1)
            {
                var path = '../'+$bxSlider.attr('data-next-path');
                var title = $bxSlider.attr('data-next-title');
                $('.bx-controls').append('<a title="'+title+'" class="next-node" href="'+path+'">next node</a>');
                $('.next-node').tooltip({
                    track: true
                });
            }
            if(newindex === 0)
            {
                var path = '../'+$bxSlider.attr('data-prev-path');
                var title = $bxSlider.attr('data-prev-title');
                $('.bx-controls').append('<a title="'+title+'" class="prev-node" href="'+path+'">prev node</a>');
                $('.prev-node').tooltip({
                    track: true
                });
            }
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
        var time = 600;
        var animate = null;
        var $bef_dom = null;
        var half = ( 950 - 10 ) / 2;
        var max = ( 950 - 10 ) * 2 / 3;
        var min = ( 950 - 10 ) * 1 / 3;
        var slide = function( width ){
            if( !animate ){
                animate = new A.Animate([ 470 ] , [ width ] , time , 'easeOutQuart' , function( arr ){
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

    $('.navitem').hover(function(){
        $(this).find('.nav_menu').fadeIn();
    },function(){
        $(this).find('.nav_menu').fadeOut();
    });

    if(page_path != undefined)
    {
        $('.nav_'+page_path).parent().addClass('on');
    }

    $('#project_filters').hoverIntent(function(){
        $(this).animate({width:325},800,'easeInOutQuart',function(){
            $(this).find('li').fadeIn(
                function(){
                   $('#project_filters li').css({display:'block'});
                }
            );
        });
    },function(){
        $(this).find('li:not(.on)').animate({opacity:0},500,'easeInOutQuart',function(){
            $(this).hide().css({opacity:1});
            var width = $('#project_filters').find('li.on').width()+10;
            $('#project_filters').animate({width:width},800,'easeInOutQuart',function(){
                //$(this).find('li:not(.on)').hide().css({opacity:1});
            });
        });
    })



    if($('.page-project').length > 0)
    {
        $('.region-content').isotope({
            itemSelector : '.project_item'

        });
        $.address.change(function(event){
            var category = event.pathNames[0];
            if(category == undefined)
            {
                category = "*";
                classname = ".all";
            }
            else
            {
                category = "."+category;
                classname = category;
            }
            $('.region-content').isotope({ filter: category });
            $('#project_filters li').removeClass('on');
            $('#project_filters').find(classname).parent().addClass('on');
            return false;
        });
    }

    $('.press_item').fancybox({
        padding:0,
        openMethod : 'dropIn',
        closeMethod : 'dropOut',
        maxHeight: '90%',
        afterShow: function(){
            var src = $('.fancybox-image').attr('src');
            $('.fancybox-image').addClass('cloudzoom').attr("data-cloudzoom", "zoomImage: '"+src+"'");
            $('.fancybox-image').CloudZoom({zoomPosition:'inside',zoomOffsetX:0});
        }
    });


    //login
    $('#contact_form').ajaxForm({
        beforeSubmit:  function(){
            return $("#contact_form").valid();
        },
        complete: function(xhr) {
            res = JSON.parse(xhr.responseText);
            console.log(res);
            if(!isNaN(res.wid))
            {
                $('#contact_form').fadeOut(function(){
                    $('#contact_form').html('<div class="success">Thank you!</div>');
                    $(this).fadeIn();
                });

            }
        },
        dataType: 'json'
    });

    $("#contact_form").validate(
        {
            submitHandler: function(form){
//                $(form).find('.formitm button').fadeOut(400);
//                $(form).find('.formitm span').delay(400).fadeIn(400);
            },
            rules: {
                email: { required: true, email: true }
            },
            messages: {
                email: {required:'Please submit your email', email: 'Please submit your correct email'}
            }
        });


    (function ($, F) {
        F.transitions.dropIn = function() {
            var endPos = F._getPosition(true);
            endPos.opacity = 0;
            endPos.top = (parseInt(endPos.top, 10) - 400);

            F.wrap.css(endPos).show().animate({
                top: endPos.top + 400,
                opacity: 1
            }, {
                easing: 'easeOutQuart',
                duration: 800,
                complete: F._afterZoomIn
            });
        };

        F.transitions.dropOut = function() {
            F.wrap.removeClass('fancybox-opened').animate({
                top: '-=200',
                opacity: 0
            }, {
                easing: 'easeInQuart',
                duration: 600,
                complete: F._afterZoomOut
            });
        };

    }(jQuery, jQuery.fancybox));
});

