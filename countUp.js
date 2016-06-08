(function ($, undefined) {
    'use strict';
    var defaults = {
    	speed: 1,
    	number: 0,
    	after: "",
    	before: "",
    	commaIndex: 3,
    	triggerClass: "",
    	activated: false,
    	start: false,
    	step: 1
    }
    $.fn.countUp = function (options) {
        if (this.length === 0) {
            return this;
        }
        var plugin = {},
        	current = 0,
            settings = $.extend(true, {}, defaults, options),
            $el = this;
        $(this).html(settings.before+"0"+settings.after);
        $el.startCount = function(){
        	var interval = setInterval(function(){
        		current += settings.step;
        		if ( current > settings.number){
        			clearInterval(interval);
        		}else{
        			$($el).html(settings.before + current + settings.after);
        		}
        	},settings.speed);
        }
        $el.activate = function () {
        	var top = $(window).scrollTop();
        	var triggerTop = $("."+ settings.triggerClass).offset().top - 150;
        	if (top > triggerTop){
        		$el.startCount();
        		settings.activated = true
        	}
        }
        $(window).scroll(function(){
        	if( !settings.activated){
        		$el.activate();
        	}
        });
    	if( !settings.activated){
    		$el.activate();
    	}
    	if (settings.start){
    		$el.startCount();
    	}
    	return this;
    }
}(jQuery));
