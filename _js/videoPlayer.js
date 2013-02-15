(function( window, document ) {
	
	var video = document.getElementsByTagName('video')[0],
		videoControls = document.getElementById('videoControls'),	
		play = document.getElementById('play'),
		mainPlay = document.getElementById('mainPlay'),

		playProgressInterval,
		loaded,
		isVideoFullScreen = false,
		
		progressContainer = document.getElementById("progress"),
		progressHolder = document.getElementById("progress_box"),
		playProgressBar = document.getElementById("play_progress"),
		
		fullScreenToggleButton = document.getElementById("fullScreen"),
		
		ie = (function() {
			// borrowed from Padolsey
		    var undef,
		        v = 3,
		        div = document.createElement('div'),
		        all = div.getElementsByTagName('i');
		    
		    while (
		        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
		        all[0]
		    );
		    
		    return v > 4 ? v : undef;
		    
		}());
		
	var videoPlayer = {
	
		init : function() {
			// If IE 8 or less, get outta here. 
			if ( ie < 9 ) return;
			
			// this is equal to the videoPlayer object.
			var that = this;
			
			// Helpful CSS trigger for JS. 
			document.documentElement.className = 'js';
			
			// Get rid of the default controls, because we'll use our own.
			video.removeAttribute('controls');
			
			// When meta data is ready, show the controls
			video.addEventListener('loadeddata', this.initializeControls, false);

			// When play, pause buttons are pressed.
			this.handleButtonPresses();
						
			this.videoScrubbing();
			video.addEventListener('loadedmetadata', function() {
				$('video').bind('progress', function() {
				  loaded = ($('video').get(0).buffered.end(0) / $('video').get(0).duration) * 100;

				  $('#number','#percentLoaded').text(Math.floor(loaded));

				  if (loaded >= 10) {
				  	$('#mainPlay').show();
				  	$('#percentLoaded').hide();
				  } else {
				  	$('#mainPlay').hide();
				  }
				});		
			});	
		},
		
		
		initializeControls : function() {
			// When all meta information has loaded, show controls
			// and set the progress bar.
			videoPlayer.showHideControls();
		},
		
		
		showHideControls : function() {
			// Shows and hides the video player.
			video.addEventListener('mouseover', function() {
				videoControls.style.opacity = 1;
			}, false);
			
			videoControls.addEventListener('mouseover', function() {
				videoControls.style.opacity = 1;
			}, false);
			
			video.addEventListener('mouseout', function(e) {
				videoControls.style.opacity = 0;
			}, false);
			
			videoControls.addEventListener('mouseout', function() {
				videoControls.style.opacity = 0;
			}, false);
		},
		
		handleButtonPresses : function() {
			// When the video or play button is clicked, play/pause the video.
			video.addEventListener('click', this.playPause, false);
			play.addEventListener('click', this.playPause, false);
			mainPlay.addEventListener('click', this.playPause, false);
			

			// When the play button is pressed, 
			// switch to the "Pause" symbol.
			video.addEventListener('play', function() {
				play.title = 'Pause';
				play.innerHTML = '<span id="pauseButton">&#x2590;&#x2590;</span>';
				videoPlayer.trackPlayProgress();	

				$('#mainPlay').hide();	
				$('#poster').hide();		
			}, false);
			
			
			// When the pause button is pressed, 
			// switch to the "Play" symbol.
			video.addEventListener('pause', function() {
				play.title = 'Play';
				play.innerHTML = '&#x25BA;';
				videoPlayer.stopTrackingPlayProgress();

				$('#mainPlay').show();
			}, false);
			
			
			// When the video has concluded, pause it.
			video.addEventListener('ended', function() {
				this.currentTime = 0;
				this.pause();

				$('#poster').show();
			}, false);
		},
		
		
		playPause: function() {
			if ( video.paused || video.ended ) {				
				if ( video.ended ) { video.currentTime = 0; }
				video.play();
			}
			else { video.pause(); }
		},
		
		
		// Every 50 milliseconds, update the play progress. 
		trackPlayProgress : function(){
			(function progressTrack() {
				 videoPlayer.updatePlayProgress();
				 playProgressInterval = setTimeout(progressTrack, 50);
			 })();
		},
		
	
		updatePlayProgress : function(){
			playProgressBar.style.width = ((video.currentTime / video.duration) * (progressHolder.offsetWidth)) + "px";
		},
		
		
		// Video was stopped, so stop updating progress.
		stopTrackingPlayProgress : function(){
			clearTimeout( playProgressInterval );
		},
		
		
		videoScrubbing : function() {
			progressHolder.addEventListener("mousedown", function(){
				videoPlayer.stopTrackingPlayProgress();
				
				videoPlayer.playPause();
				
				document.onmousemove = function(e) {
				  videoPlayer.setPlayProgress( e.pageX );
				}
				
				progressHolder.onmouseup = function(e) {
					document.onmouseup = null;
					document.onmousemove = null;
										
					video.play();
					videoPlayer.setPlayProgress( e.pageX );
					videoPlayer.trackPlayProgress();
				}
			}, true);
		},
		
		setPlayProgress : function( clickX ) {
			var newPercent = Math.max( 0, Math.min(1, (clickX - this.findPosX(progressHolder)) / progressHolder.offsetWidth) );
			video.currentTime = newPercent * video.duration;
			playProgressBar.style.width = newPercent * (progressHolder.offsetWidth)  + "px";
		},
		
		findPosX : function(progressHolder) {
			var curleft = progressHolder.offsetLeft;
			while( progressHolder = progressHolder.offsetParent ) {
				curleft += progressHolder.offsetLeft;
			}
			return curleft;
		},
		
		// Determines if the escape key was pressed.
		checkKeyCode : function(e) {
			e = e || window.event;
			if ( (e.keyCode || e.which) === 27 ) videoPlayer.fullScreenOff();
		}
		
	};
	
	videoPlayer.init();
		
})( this, document );