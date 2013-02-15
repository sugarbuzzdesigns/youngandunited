$.modal = {

    fadeSpeed: 500,

    screen: $('<div />',{'class': 'modalScreen'}).click(function(){$.modal.close();}),

    house: $('<div />', {'class': 'modalHouse'}),

    populate: 
        function(content){

            this.content = content;
            this.house.html(content);
            return this;
        },

    close:
        function(){
            $.modal.house.stop(true,true).fadeOut($.modal.speed, 
                function(){
                    $(this).detach();
                    $.modal.content.detach();
                    $.modal.screen.stop(true,true).fadeOut($.modal.fadeSpeed, 
                            function(){$.modal.screen.detach();});
                });
            yu.selections.window.off('keyup',$.modal.escape);
            yu.selections.window.unbind("resize",$.modal.reposition);

            $.modal.reset();
        },

    reset:
        function(){
            $.modal.house.find('.wrap').each(function(){
                var $this = $(this),
                    top = $this.css('top');

                if(top === 0 + 'px'){
                    $this.css({top: -280 + 'px'});
                }

                $(this).animate({top: -270}); 
            });
        },

    open: 
        function(){
            this.screen.stop(true, true).hide().appendTo('body').fadeIn($.modal.fadeSpeed*3);
            $.modal.house.hide().appendTo('body').stop(true,true).fadeIn($.modal.fadeSpeed);
            yu.selections.window.on('keyup', $.modal.escape);
            yu.selections.window.bind("resize",$.modal.reposition);
            $.modal.reposition();

            if(yu.selections.window.height() < $.modal.house.find(".modal").outerHeight()){
                $.modal.house.css({top: 15}).find(".modal").css({height: yu.selections.window.height() - 30, overflow: 'scroll', 'overflow-x': 'hidden'});
            }
      
      var iframe = $('#mainVideo')[0],
        player = $f(iframe),
        status = $('.status');

        // When the player is ready, add listeners for pause, finish, and playProgress
        player.addEvent('ready', function() {
            status.text('ready');
            
            player.api('play');

            player.addEvent('pause', onPause);
            player.addEvent('finish', onFinish);
            player.addEvent('playProgress', onPlayProgress);
        });

        // Call the API when a button is pressed
        function onFinish(id) {
                $.modal.close();
        }
            
        },
    
    reposition:
        function(){
            var posY = (yu.selections.window.height()/2)-($.modal.house.find(".modal").height()/2),
                posX = (yu.selections.window.width()/2)-($.modal.house.find(".modal").width()/2);

            $.modal.house.css("top", posY);
            $.modal.house.css("left", posX);
        },
        
    escape: 
        function(e){
            if (e.keyCode === 27) $.modal.close();
        }

}

$.fn.modalize = function(openCallback, closeCallback){
    return $(this).each(function(){


         var self = $(this);
            self
                .data('modalFriend', $("#"+self.data().modalid)).unbind('click')
                .click(function(e){

                    console.log('clicked');
                    e.preventDefault();
                    if (self.data().modalFriend.length > 0){
                        $.modal.populate(self.data().modalFriend).open();
                         if(typeof openCallback === "function"){ openCallback(this); }
                    }
                });
            $('.close',self.data().modalFriend).click(function(){
                $.modal.close();
                if(typeof closeCallback === "function"){ closeCallback(this); }
            });
    });

}