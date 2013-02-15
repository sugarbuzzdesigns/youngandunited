/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 * TERMS OF USE - jQuery Easin
 * Open source under the BSD License.
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved. 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met: 
 * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials  provided with the distribution.
 * Neither the name of the author nor the names of contributors may be used to endorse or promote products derived from this software without specific prior written permission.
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED  OF THE POSSIBILITY OF SUCH DAMAGE. */
// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];
jQuery.extend( jQuery.easing,
{
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {return jQuery.easing[jQuery.easing.def](x, t, b, c, d);},
    easeInQuad: function (x, t, b, c, d) {return c*(t/=d)*t + b;},
    easeOutQuad: function (x, t, b, c, d) {return -c *(t/=d)*(t-2) + b;},
    easeInOutQuad: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t + b;return -c/2 * ((--t)*(t-2) - 1) + b;},
    easeInCubic: function (x, t, b, c, d) {return c*(t/=d)*t*t + b;},
    easeOutCubic: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t + 1) + b;},
    easeInOutCubic: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t + b; return c/2*((t-=2)*t*t + 2) + b;},
    easeInQuart: function (x, t, b, c, d) {return c*(t/=d)*t*t*t + b;},
    easeOutQuart: function (x, t, b, c, d) {return -c * ((t=t/d-1)*t*t*t - 1) + b;},
    easeInOutQuart: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t + b;return -c/2 * ((t-=2)*t*t*t - 2) + b;},
    easeInQuint: function (x, t, b, c, d) {return c*(t/=d)*t*t*t*t + b;},
    easeOutQuint: function (x, t, b, c, d) {return c*((t=t/d-1)*t*t*t*t + 1) + b;},
    easeInOutQuint: function (x, t, b, c, d) {if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b; return c/2*((t-=2)*t*t*t*t + 2) + b;},
    easeInSine: function (x, t, b, c, d) {return -c * Math.cos(t/d * (Math.PI/2)) + c + b;},
    easeOutSine: function (x, t, b, c, d) {return c * Math.sin(t/d * (Math.PI/2)) + b;},
    easeInOutSine: function (x, t, b, c, d) {return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;},
    easeInExpo: function (x, t, b, c, d) {return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;},
    easeOutExpo: function (x, t, b, c, d) {return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;},
    easeInOutExpo: function (x, t, b, c, d) {if (t==0) return b;if (t==d) return b+c;if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;},
    easeInCirc: function (x, t, b, c, d) {return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;},
    easeOutCirc: function (x, t, b, c, d) {return c * Math.sqrt(1 - (t=t/d-1)*t) + b;},
    easeInOutCirc: function (x, t, b, c, d) {if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;},
    easeInElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a);return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;},
    easeOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;if (a < Math.abs(c)) { a=c; var s=p/4; } else var s = p/(2*Math.PI) * Math.asin (c/a);return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;},
    easeInOutElastic: function (x, t, b, c, d) {var s=1.70158;var p=0;var a=c;if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);if (a < Math.abs(c)) { a=c; var s=p/4; }else var s = p/(2*Math.PI) * Math.asin (c/a);if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;},
    easeInBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158;return c*(t/=d)*t*((s+1)*t - s) + b;},
    easeOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158;return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;},
    easeInOutBack: function (x, t, b, c, d, s) {if (s == undefined) s = 1.70158; if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;},
    easeInBounce: function (x, t, b, c, d) {return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;},
    easeOutBounce: function (x, t, b, c, d) {if ((t/=d) < (1/2.75)) {return c*(7.5625*t*t) + b; } else if (t < (2/2.75)) {return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;} else if (t < (2.5/2.75)) {return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;} else {return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;}},
    easeInOutBounce: function (x, t, b, c, d) {if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;}
});

// Define the global namespace for YU
var yu = {

}

yu.selections = {
    window: $(window),
    bodyScrollElement : ($.browser.mozilla || $.browser.msie) ? $('html') : $('body'), 
    body: $('body'),
    document: $(document),
    section: $('section'),
    menu : $('#menu')
}

yu.environment = {

        browser: {
            minHeight: 700,
            minWidth: 1280,
            ltIE10: $("html").hasClass("lt-ie10"),
            ltIE9: $("html").hasClass("lt-ie9"),
            ltIE8: $("html").hasClass("lt-ie8"),
            ltIE7: $("html").hasClass("lt-ie7")
    },
        setDimensions: 
         function(){
            var w=window,d=document,e=d.documentElement,g=yu.selections.body[0],
                x=w.innerWidth||e.clientWidth||g.clientWidth,
                y=w.innerHeight||e.clientHeight||g.clientHeight;
            yu.environment.browser.width = x; 
            yu.environment.browser.height = y; 
            yu.environment.documentHeight = yu.selections.document.height();
    }
}

yu.floatingNav = {

    init : function(){
        var self = this;

        yu.selections.window.scroll(function(){
            if (yu.selections.window.scrollTop() >= yu.selections.window.height() + 48) {
                self.fixToTop(self.menu);
            } else {
                self.resetMenu(self.menu);
            }
        });
        self.bindLinks();
    },

    menu : $('#menu'),

    fixToTop : function(elm){
        elm.addClass('stickyNav');
    },

    resetMenu : function(elm){
        elm.removeClass('stickyNav');
    },

    bindLinks :  function(){
        var self = this;

        $('a', self.menu).click(function(e){
            var $this = $(this);
                e.preventDefault();

                scrollSection = $this.data('anchor'),
                scrollAmount = $('#' + scrollSection).offset().top;

                self.activateLink($this);

                $(yu.selections.bodyScrollElement).animate({
                    scrollTop: scrollAmount
                }, 700, 'easeInSine');
        });
    },

    activateLink: function(elm){
        elm.parent().addClass('active').siblings().removeClass('active');
    }
},

yu.verticalCenter = {
    init: function(){
        // yu.verticalCenter.centerContent();

        // yu.selections.window.resize(function(){
        //     yu.verticalCenter.centerContent();
        // });        
    },
    content: $('.content','#about'),

    centerContent: function(){
        yu.verticalCenter.content.each(function(i, elm){
        if(!$(elm).parent().is('#slide_2') && !$(elm).parent().is('#slide_3') && !$(elm).parent().is('#section_repeat')){

                $(elm).css({
                    paddingTop: (yu.selections.window.height()/2) - (elm.offsetHeight/2)
                });
            }
        });
    }
},

yu.closestSection = {
    init: function(){
        
        var sections = $('section'),
            sectionsTotalHeight = sections.height() * 3,
            closest = sections.first();

        yu.selections.window.scroll(function(){
                
                var currentScroll = $(this).scrollTop(),
                    distance = Math.abs(closest.offset().top - currentScroll);
                
            sections.each(function(){
                var self = $(this),
                    proximity = Math.abs(self.offset().top - currentScroll);
                    
                    if (proximity < distance) {
                        closest = $(this);
                        distance = proximity;
                    }     
            }); 
        });
        
        yu.selections.window.resize(function() {
            if(this.resizeTO) clearTimeout(this.resizeTO);
            this.resizeTO = setTimeout(function() {
                $(this).trigger('resizeEnd');
            }, 200);
        });

        yu.selections.window.bind('resizeEnd', function() {
            if($(this).scrollTop() != 0 && $(window).scrollTop() - 101 < sectionsTotalHeight){
                $('html, body').animate({
                    scrollTop: closest.offset().top
                }); 

                var offset = (yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width;

                console.log(offset);

                yu.createSectionSlider.slider.animate({
                    marginLeft: -(yu.createSectionSlider.index * offset)
                }, 700, 'easeInSine');                
            }

            var activeLink = $('#menu').find("[data-anchor='" + closest.attr('id') + "']");

            yu.floatingNav.activateLink(activeLink);
        });        

        yu.selections.window.bind('scrollstop', function(e){
            if($(this).scrollTop() != 0 && $(window).scrollTop() - 101 < sectionsTotalHeight){
                $('html, body').animate({
                    scrollTop: closest.offset().top
                }); 
            }
            
            var activeLink = $('#menu').find("[data-anchor='" + closest.attr('id') + "']");

            yu.floatingNav.activateLink(activeLink);
        });
    }
},

yu.createSectionSlider = {
    slider: $('#sections'),
    slides: $('.slide'),
    controls: $('.controls'),
    prev: $('.prev', this.controls),
    next: $('.next', this.controls),
    proceed: $('.button', '#slide_4'),
    slideScreen: $('#screen'),
    sliderPos: 0,

    index: 0,

    init: function(){
        var self = this;

        this.prev.hide();

        $('.slide').css({width: (yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width});

        yu.selections.window.resize(function(){
            $('.slide').css({width: (yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width});
        });
        this.bindEvents();
        this.next.hide();
    },        

    bindEvents: function(){
    var self = this;

        self.prev.click(function(){
            self.prevSlide();
        });

        self.next.click(function(){
            self.nextSlide();
        });     

        self.proceed.click(function(e){
            e.preventDefault();

            yu.selections.bodyScrollElement.animate({
                'scrollTop': $('#section_give').offset().top
            });
        });

        $('a.button','#slide_1').click(function(e){
            e.preventDefault();

            self.nextSlide();
            self.next.fadeIn();
        })  
    },

    nextSlide: function(){
        if(this.index === 2){
            this.next.fadeOut();
        }

        if(this.index === 3){
            this.slider.animate({marginLeft: 0});
            this.index = 0;
            this.sliderPos = 0;
            this.next.fadeOut();
        } else {
            this.slider.animate({marginLeft: this.sliderPos -= (yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width});
            this.prev.delay(400).fadeIn();
            this.index = ++this.index;
        }
    },

    prevSlide: function(){
        if(this.index <= 3){
            this.next.fadeIn();
        }

        if(this.index === 1){
            this.prev.fadeOut();
            this.next.hide();
        }

        if(this.index === 0){
            this.slider.animate({marginLeft: -(yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width * 3});
            this.index = 3;
            this.sliderPos = -(yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width * 3;
        } else {        
            this.slider.animate({marginLeft: this.sliderPos += (yu.environment.browser.width < 1280) ? 1280 : yu.environment.browser.width});

            this.index = --this.index;
        }
    }
}

yu.sliderPicker = {
    init : function(){
        yu.sliderPicker.bindLinks();
    },

    pickers : $('[data-targetId]'),

    bindLinks : function(){
        var self = $(this);

        yu.sliderPicker.pickers.each(function(i, elm){
            $(elm).click(function(e){
                e.preventDefault();

                var $this = $(this),
                    slideShowId = $this.data().targetid,
                    slideShow = $('#'+slideShowId),
                    slideShowParent = slideShow.parent(),
                    otherSlider = slideShowParent.siblings().find('.nivoSlider');

                    $this.addClass('current');
                    $this.siblings().removeClass('current');
                    yu.sliderPicker.startSlide(slideShow);
                    yu.sliderPicker.stopSlide(otherSlider);
                    
            });
        });
    },

    resizeSliderHolder: function(){
       var targetHeight = $('#slider-youth');

        yu.selections.window.resize(function(){
            targetHeight = $('#slider-youth').height();

            $('#sliders').css({height: targetHeight});
            $('#slider_1').css({height: targetHeight});
            $('#slider_2').css({height: targetHeight});
        });
    },

    startSlide : function(slideShow){
        slideShow.parent().show();
        slideShow.data('nivoslider').start();
    },

    stopSlide : function(slideShow){
        slideShow.parent().hide();
        slideShow.data('nivoslider').stop();
    },    
},

yu.productRoadBlock = {
    init: function(){
        this.showRoadBlock();
    },

    showRoadBlock: function(){
        $('#roadBlock').fadeIn(1000);
        $('#letMeIn').click(function(e){
          e.preventDefault();

          $('#roadBlock').fadeOut(1000);     
        }); 

        $('a','.social').click(function(){
          $('#roadBlock').fadeOut(1000);
        }); 
    }
}

yu.openProductPicker = {
    openProducts: $('.openProduct'),

    init: function(){
        this.bindEvents();
    },

    bindEvents: function(){
        this.openProducts.each(function(){
            var $this = $(this),
                colorOptions = $(this).find('.colorOption'),
                colorPicker = $('.colors', $this),
                colorLinks = $('a', colorPicker);

                colorLinks.click(function(e){
                    var $this = $(this),
                        i = $this.index(),
                        colorToShow = $this.parent().data('color');
                    
                    e.preventDefault();

                    $this.parent().addClass('active').siblings('span').removeClass('active');

                    $('.' + colorToShow).show().siblings('.colorOption').hide();
                });
        });
    }
},

yu.productSwitcher = {
    colorOption: $('.colorOption'),

    init: function(){
        this.bindEvents();
    },

    bindEvents: function(){
        this.colorOption.each(function(){
            $(this).find('.navItem').click(function(){
                var $this = $(this),
                    i = $this.index(),
                    productImg = $this.parents('.colorOption').find('.productImg');

                    $this.addClass('current').siblings().removeClass('current');
                    $(productImg[i]).show().siblings('.productImg').hide();
            });
        });
    }
},

yu.checkOldBrowsers = {
	init: function(){
		if($('body.lt-ie9')){
			$('<div/>',{
				class: 'ie-modal',
				html: '<p>Some info here<p/>'
			}).appendTo('body');
		}
	}
}

yu.shareFunctionality = {
    init: function(){
        this.bindEvents();
        this.twitter();
        this.facebook();
        this.pintrest();
        this.tumblr();
        this.google();
    },

    bindEvents: function(){
        var self = this;

        $('.share').click(function(e){
            var $this = $(this);
            
            e.preventDefault();

            self.openShare(this);
        });
        
        $('button', '.shareBox-cta').click(function(){
            var $this = $(this);

            self.closeShare(this);
        });        
    },

    openShare: function(elm){
        $(elm).prev().animate({
            right: 0
        });
    },

    closeShare: function(elm){
        $(elm).parent().animate({
            right: 237
        });        
    },

    twitter: function(){
        var twitterLinks = $('.twitter');

        twitterLinks.each(function(){

        var $this = $(this),
            twitter_link_url = $this.data('url'),
            twitter_link_text = $this.data('text'),
            twitter_link_count = 'horizontal';

            $this.attr("href", "https://twitter.com/share?url=" + encodeURIComponent(twitter_link_url) 
                + "&text=" + encodeURIComponent(twitter_link_text)
                + "&count=" + encodeURIComponent(twitter_link_text));
            $this.attr("title", "Share on Twitter");
        });        
    },

    facebook: function(){
        var facebookLinks = $('.facebook');

        facebookLinks.each(function(){

        var $this = $(this),
            facebook_link_app_id = '306587712781130',
            facebook_link_url = $this.data('link'),
            facebook_link_picture = $this.data('picture'),
            facebook_link_name = $this.data('name'),
            facebook_link_caption = $this.data('caption'),
            facebook_link_redirect_uri = $this.data('redirect-uri');
            
            $this.attr("href", "https://www.facebook.com/dialog/feed?app_id=" + encodeURIComponent(facebook_link_app_id) 
                + "&link=" + encodeURIComponent(facebook_link_url) 
                + "&picture=" + encodeURIComponent(facebook_link_picture)
                + "&name=" + encodeURIComponent(facebook_link_name)
                + "&caption=" + encodeURIComponent(facebook_link_caption)
                + "&redirect_uri=" + encodeURIComponent(facebook_link_redirect_uri));
            $this.attr("title", "Share on Facebook");
        }); 
    },

    pintrest: function(){
        var pintrestLinks = $('.pintrest');

        pintrestLinks.each(function(){

        var $this = $(this),
            pintrest_link_url = $this.data('url'),
            pintrest_link_media = $this.data('media'),
            pintrest_link_description = $this.data('description');

            $this.attr("href", "//pinterest.com/pin/create/button/?url=" + encodeURIComponent(pintrest_link_url) 
                + "&media=" + encodeURIComponent(pintrest_link_media)
                + "&description=" + encodeURIComponent(pintrest_link_description));
            $this.attr("title", "Share on Pintrest");
        }); 
    },

    tumblr: function(){
        var tumblrLinks = $('.tumblr');
            
        tumblrLinks.each(function(){

        var $this = $(this),
            tumblr_link_url = $this.data('url'),
            tumblr_link_name = $this.data('name'),
            tumblr_link_description = $this.data('description');
            
            $this.attr("href", "http://www.tumblr.com/share/link?url=" + encodeURIComponent(tumblr_link_url) + "&name=" + encodeURIComponent(tumblr_link_name) + "&description=" + encodeURIComponent(tumblr_link_description));
            $this.attr("title", "Share on Tumblr");
            $this.attr("style", "display:inline-block; vertical-align: middle; text-indent:-9999px; overflow:hidden; width:30px; height:29px; background:url('http://youngandunited.com/_img/shareBox/tumbler.gif') top left no-repeat transparent;");
        });
    },

    google: function(){
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = 'https://apis.google.com/js/plusone.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);

        var googlePlusLinks = $('.googlePlus');

        googlePlusLinks.each(function(){

        var $this = $(this),
            google_link_url = $this.data('url');

            $this.attr("href", "https://plus.google.com/share?url=" + encodeURIComponent(google_link_url));
            $this.attr("title", "Share on Google Plus");
        });         
    }                      
}

$(function(){
    yu.floatingNav.init();
    yu.openProductPicker.init();
    yu.productSwitcher.init();
    yu.selections.window.resize(yu.environment.setDimensions).resize();
    yu.selections.window.resize(yu.sliderPicker.resizeSliderHolder);
    yu.createSectionSlider.init();
    yu.shareFunctionality.init();
    yu.checkOldBrowsers.init();
});