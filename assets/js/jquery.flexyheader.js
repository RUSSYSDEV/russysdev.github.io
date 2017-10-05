// Sticky Plugin
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//              It will only set the 'top' and 'position' of your element, you
//              might need to adjust the width in some cases.

(function($) {
    var defaults = {
            topSpacing: 0
        },
        $window = $(window),
        $document = $(document),
        flexied = [],
        windowHeight = $window.height(),
        unpx = function(px){ var n = parseInt(px.replace(/px$/i, '')); return isNaN(n) ? 0 : n; },
        scroller = function() {
            var scrollTop = $window.scrollTop(),
                documentHeight = $document.height(),
                dwh = documentHeight - windowHeight,
                extra = (scrollTop > dwh) ? dwh - scrollTop : 0;
            for (var i = 0; i < flexied.length; i++) {
                var s = flexied[i];
                var elementTop = s.flexyParent.offset().top,
                    etse = elementTop - s.topSpacing - extra,
                    deltaH = Math.max(s.minHeight, s.maxHeight - (scrollTop - etse)),
                    curH = s.flexyElement.height(),
                    setH = curH - (curH-deltaH);

                if (scrollTop <= etse) {
                    //s.flexyElement.height(s.maxHeight);
                    s.flexyElement.css('background-attachment', 'scroll');
                    s.flexyElement.css('background-position', 'center top');
                    //console.log(s.flexyParent.attr('id')+' scrollTop <= etse: '+scrollTop+' <= '+etse);
                }
                else {
                    //s.flexyElement.height(setH);
                    if(setH > s.minHeight){
                        s.flexyElement.css('background-attachment', 'fixed');
                        s.flexyElement.css('background-position', 'center top');
                    } else {
                        s.flexyElement.css('background-position', 'center '+(s.maxHeight-s.minHeight)+'px')
                        s.flexyElement.css('background-attachment', 'scroll');
                    }
                    //if(s.flexyParent.attr('id')=='for-candidates')
                        //console.log(' curH'+curH+' deltaH'+deltaH+' setH'+setH);
                }
            }
        },
        resizer = function() {
            windowHeight = $window.height();
        },
        methods = {
            init: function(options) {
                var o = $.extend(defaults, options);
                return this.each(function() {
                    var flexyParent = $(this);
                    var flexyElement = $(this).find('header');

                    if(flexyElement[0])
                        flexied.push({
                            flexyParent: flexyParent,
                            flexyElement: flexyElement,
                            topSpacing: o.topSpacing,
                            minHeight: unpx(flexyElement.css('min-height')),
                            maxHeight: flexyElement.height()
                        });

                });
            },
            update: scroller
        };

    // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
    if (window.addEventListener) {
        window.addEventListener('scroll', scroller, false);
        window.addEventListener('resize', resizer, false);
    } else if (window.attachEvent) {
        window.attachEvent('onscroll', scroller);
        window.attachEvent('onresize', resizer);
    }

    $.fn.flexyHeader = function(method) {
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.sticky');
        }
    };
    $(function() {
        setTimeout(scroller, 0);
    });
})(jQuery);