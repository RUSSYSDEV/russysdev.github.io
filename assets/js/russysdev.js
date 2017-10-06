jQuery(document).ready(function($){

	var stickedNavs = []

	$('.to-navbar-left').each(function(){
		var $sidebar = $('#rsd_navbar_left > nav')
		if($sidebar[0]){
			$(this).appendTo($sidebar)
			$sidebar.find('h4').css('display', 'block')
		}
	});

	// sticky sidebars
	$('nav.toc').each(function(){
		var $sidebar = $(this),
			h = $sidebar.outerHeight(true),
			docH = $(document).height(),
			top = $('nav.rsd-navbar').outerHeight(true),
			bottom = $('footer').outerHeight(true),
			offset = $sidebar.offset().top,
			topThreshold = offset - top,
			bottomThreshold = docH - bottom,
			windowTop_prev = null,
			absoluteTop = function(topToSet){
				if(!this.hasClass('absolute')){
					this.removeClass('fixed');
					this.css({ top: topToSet, bottom: '' })
					this.addClass('absolute');
				}
			},
			absoluteBottom = function(){
				if(!this.hasClass('absolute')){
					this.removeClass('fixed');
					this.css({ top: '', bottom: bottom });
					this.addClass('absolute');
				}
			},
			fixedBottom = function(){
				if(!this.hasClass('fixed')){
					this.removeClass('absolute');
					this.css({ top: '', bottom: 0 })
					this.addClass('fixed');
				}
			},
			fixedTop = function(){
				if(!this.hasClass('fixed')){
					this.removeClass('absolute');
					this.css({ top: top, bottom: '' })
					this.addClass('fixed');
				}
			},
			normal = function(){
				this.removeClass('absolute')
				this.removeClass('fixed')
				this.css({ top: '', bottom: '' })
			}
			scroller = function(){
				var windowTop = $(window).scrollTop(),
					winH = $(window).height(),
					curOffset = $sidebar.offset().top,
					h = $sidebar.outerHeight(true);

				if(windowTop < topThreshold){
					normal.call($sidebar)
				} else {

					if(windowTop_prev===null){
						absoluteTop.call($sidebar, windowTop - offset + top)
						windowTop_prev = windowTop;
					}

					//console.log( windowTop, windowTop_prev)

					if( windowTop > windowTop_prev){ // if we scoll down
						if(curOffset+h-15 < windowTop+winH && curOffset+h < bottomThreshold){
							fixedBottom.call($sidebar)
						} else {
							absoluteTop.call($sidebar, curOffset - offset + top)
						}
					} else { // if we scroll up
						if(curOffset < windowTop){
							absoluteTop.call($sidebar, curOffset)
						} else {
							fixedTop.call($sidebar)
						}
					}

					windowTop_prev = windowTop
					
				}


			}
		if (window.addEventListener) {
	        window.addEventListener('scroll', scroller, false);
	        window.addEventListener('resize', scroller, false);
	    } else if (window.attachEvent) {
	        window.attachEvent('onscroll', scroller);
	        window.attachEvent('onresize', scroller);
	    }
	    scroller();

	});

	$(".rsd-navbar").sticky({
		topSpacing : 0
		, onstickstart: function(){
			$('a[href="#top"]').css('display', 'block');
			return;
			var navbarH = $(this).outerHeight(true)
			$("#rsd_navbar_left, #rsd_navbar_right").find('nav').each(function(){
				var $nav = $(this),
					offset = $nav.offset(),
					$parent = $nav.parent(),
					newTop = navbarH + offset.top - $parent.offset().top;
				this.dataset['parent'] = $nav.parent().attr('id');
				$nav.appendTo( $('body') )
					.css('position', 'fixed')
					.css('left', offset.left)
					.css('top', newTop)
					.css('height', $(window).height()-newTop)
					.css('overflow-y', 'auto');
				stickedNavs.push(this)
			})
		}
		, onstickend: function(){
			$('a[href="#top"]').css('display', 'none');
			for(var i=stickedNavs.length-1;i>=0;i--){

				var nav = stickedNavs[i],
					$parent = $('#'+(nav.dataset['parent'])),
					$nav = $(nav);

				$nav.css('position', 'static')
					.css('height', 'auto')
					.appendTo($parent);

				stickedNavs.pop();
					
			}
		}
		
	})


	


	$('a[href="#top"]').click(function(){
		window.scrollTo(0,0);
		return false;
		})
		.css('display', 'none');

	$("#fb-wrapper")
		.css('margin-top', ($(window).height()-(300+10))+'px')
		.sticky({
			topSpacing : 0
		});

	var $fbWrapper = $('#fb-wrapper');

	var attachHover = function(flagEnable){

		if(flagEnable){
			$("#fb-tip").hover(function(){
				attachHover(false);
				$fbWrapper.animate({
					marginRight: 0
				})
			})
		} else {
			$("#fb-tip").off( "mouseenter mouseleave" );
		}
	}

	$("#fb-tip").click(function(){
		if ($fbWrapper.css('margin-right')=='0px'){
			$fbWrapper.animate({
				marginRight: -280
			}, 'slow', function(){ attachHover(true); })	
		} else {
			attachHover(false);
			$fbWrapper.animate({
				marginRight: 0 
			})
		}
		
	});

	attachHover(true);

	$('.share-popup').click(function(){

	    var width  = 575,
	        height = 400,
	        left   = ($(window).width()  - width)  / 2,
	        top    = ($(window).height() - height) / 2,
	        url    = this.href,
	        opts   = 'status=1' +
	                 ',width='  + width  +
	                 ',height=' + height +
	                 ',top='    + top    +
	                 ',left='   + left;
	    
	    window.open(url, this.dataset['name'], opts);
	 
	    return false;

	});


})