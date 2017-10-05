jQuery(document).ready(function($){

	var stickedNavs = []

	$('.to-navbar-left').each(function(){
		var $sidebar = $('#rsd_navbar_left > nav')
		if($sidebar[0]){
			$(this).appendTo($sidebar)
			$sidebar.find('h4').css('display', 'block')
		}
	})

	$(".rsd-navbar").sticky({
		topSpacing : 0
		, onstickstart: function(){
			$('a[href="#top"]').css('display', 'block');
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