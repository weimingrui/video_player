//fgnass.github.com/spin.js#v2.0.1
!function(a,b){"object"==typeof exports?module.exports=b():"function"==typeof define&&define.amd?define(b):a.Spinner=b()}(this,function(){"use strict";function a(a,b){var c,d=document.createElement(a||"div");for(c in b)d[c]=b[c];return d}function b(a){for(var b=1,c=arguments.length;c>b;b++)a.appendChild(arguments[b]);return a}function c(a,b,c,d){var e=["opacity",b,~~(100*a),c,d].join("-"),f=.01+c/d*100,g=Math.max(1-(1-a)/b*(100-f),a),h=j.substring(0,j.indexOf("Animation")).toLowerCase(),i=h&&"-"+h+"-"||"";return l[e]||(m.insertRule("@"+i+"keyframes "+e+"{0%{opacity:"+g+"}"+f+"%{opacity:"+a+"}"+(f+.01)+"%{opacity:1}"+(f+b)%100+"%{opacity:"+a+"}100%{opacity:"+g+"}}",m.cssRules.length),l[e]=1),e}function d(a,b){var c,d,e=a.style;for(b=b.charAt(0).toUpperCase()+b.slice(1),d=0;d<k.length;d++)if(c=k[d]+b,void 0!==e[c])return c;return void 0!==e[b]?b:void 0}function e(a,b){for(var c in b)a.style[d(a,c)||c]=b[c];return a}function f(a){for(var b=1;b<arguments.length;b++){var c=arguments[b];for(var d in c)void 0===a[d]&&(a[d]=c[d])}return a}function g(a,b){return"string"==typeof a?a:a[b%a.length]}function h(a){this.opts=f(a||{},h.defaults,n)}function i(){function c(b,c){return a("<"+b+' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">',c)}m.addRule(".spin-vml","behavior:url(#default#VML)"),h.prototype.lines=function(a,d){function f(){return e(c("group",{coordsize:k+" "+k,coordorigin:-j+" "+-j}),{width:k,height:k})}function h(a,h,i){b(m,b(e(f(),{rotation:360/d.lines*a+"deg",left:~~h}),b(e(c("roundrect",{arcsize:d.corners}),{width:j,height:d.width,left:d.radius,top:-d.width>>1,filter:i}),c("fill",{color:g(d.color,a),opacity:d.opacity}),c("stroke",{opacity:0}))))}var i,j=d.length+d.width,k=2*j,l=2*-(d.width+d.length)+"px",m=e(f(),{position:"absolute",top:l,left:l});if(d.shadow)for(i=1;i<=d.lines;i++)h(i,-2,"progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");for(i=1;i<=d.lines;i++)h(i);return b(a,m)},h.prototype.opacity=function(a,b,c,d){var e=a.firstChild;d=d.shadow&&d.lines||0,e&&b+d<e.childNodes.length&&(e=e.childNodes[b+d],e=e&&e.firstChild,e=e&&e.firstChild,e&&(e.opacity=c))}}var j,k=["webkit","Moz","ms","O"],l={},m=function(){var c=a("style",{type:"text/css"});return b(document.getElementsByTagName("head")[0],c),c.sheet||c.styleSheet}(),n={lines:12,length:7,width:5,radius:10,rotate:0,corners:1,color:"#000",direction:1,speed:1,trail:100,opacity:.25,fps:20,zIndex:2e9,className:"spinner",top:"50%",left:"50%",position:"absolute"};h.defaults={},f(h.prototype,{spin:function(b){this.stop();{var c=this,d=c.opts,f=c.el=e(a(0,{className:d.className}),{position:d.position,width:0,zIndex:d.zIndex});d.radius+d.length+d.width}if(e(f,{left:d.left,top:d.top}),b&&b.insertBefore(f,b.firstChild||null),f.setAttribute("role","progressbar"),c.lines(f,c.opts),!j){var g,h=0,i=(d.lines-1)*(1-d.direction)/2,k=d.fps,l=k/d.speed,m=(1-d.opacity)/(l*d.trail/100),n=l/d.lines;!function o(){h++;for(var a=0;a<d.lines;a++)g=Math.max(1-(h+(d.lines-a)*n)%l*m,d.opacity),c.opacity(f,a*d.direction+i,g,d);c.timeout=c.el&&setTimeout(o,~~(1e3/k))}()}return c},stop:function(){var a=this.el;return a&&(clearTimeout(this.timeout),a.parentNode&&a.parentNode.removeChild(a),this.el=void 0),this},lines:function(d,f){function h(b,c){return e(a(),{position:"absolute",width:f.length+f.width+"px",height:f.width+"px",background:b,boxShadow:c,transformOrigin:"left",transform:"rotate("+~~(360/f.lines*k+f.rotate)+"deg) translate("+f.radius+"px,0)",borderRadius:(f.corners*f.width>>1)+"px"})}for(var i,k=0,l=(f.lines-1)*(1-f.direction)/2;k<f.lines;k++)i=e(a(),{position:"absolute",top:1+~(f.width/2)+"px",transform:f.hwaccel?"translate3d(0,0,0)":"",opacity:f.opacity,animation:j&&c(f.opacity,f.trail,l+k*f.direction,f.lines)+" "+1/f.speed+"s linear infinite"}),f.shadow&&b(i,e(h("#000","0 0 4px #000"),{top:"2px"})),b(d,b(i,h(g(f.color,k),"0 0 1px rgba(0,0,0,.1)")));return d},opacity:function(a,b,c){b<a.childNodes.length&&(a.childNodes[b].style.opacity=c)}});var o=e(a("group"),{behavior:"url(#default#VML)"});return!d(o,"transform")&&o.adj?i():j=d(o,"animation"),h});
var videoPlayerTV = function(context)

{	
	var _videoPlayer = this;
	var event_listener = [];
	
	var videoplaytime=null;
	var _video=null
	var counter=0;
	var _videoplaysign=false;
	var _firstenterfullScreen=false;
	var volumedisplay=null;
	var enterfullvideoscreen=null;
	var _isFullScreen=false;
	var _draw_progressbar_timer = null;
	var _seek_effective_timer = null;
	var _seek_effective_timer2 = null;
	var playeTime=0;
	var currenttime = -1;
	var _videopauseimg=null;
	var _videovolume=null;
	var _playtimeline=null;
	var video_zindex = 10000;
	var ctx = null;
	var isVisible = false;
	var isVisibleVolume=false;
	var useCss=false;
	
	var _player_container=null;
	var _videoplaycontain=null;
	var _playerSpinContain=null;
	var netSpeed=null;
	var listeningNetSpeed=null;
	var resetNetSpeedPosition=null;
	var listeningPSign=null;
	var listening_Spin=null;
	var showProgressBarSign=true;
	var videoinfo="";
	var updateSign=true;
	var currentTime=null;
	var opts = {
  		lines: 13, // The number of lines to draw
		length: 15, // The length of each line
		width: 5, // The line thickness
		radius: 20, // The radius of the inner circle
		corners: 1, // Corner roundness (0..1)
		rotate: 0, // The rotation offset
		direction: 1, // 1: clockwise, -1: counterclockwise
		color: '#ffffff', // #rgb or #rrggbb or array of colors
		speed: 1, // Rounds per second
		trail: 60, // Afterglow percentage
		shadow: false, // Whether to render a shadow
		hwaccel: false, // Whether to use hardware acceleration
		className: 'spinner', // The CSS class to assign to the spinner
		zIndex: 0, // The z-index (defaults to 2000000000)
		top: '49%', // Top position relative to parent
		left: '50%', // Left position relative to parent
		transform: 'translate(-50%, -50%)'
	};
	var spinner = null;
	var isTimerEnabled = false;
	
	this.createVideoContainer=function()
	{	
		isVisible = true;
		var width = window.innerWidth;
		var height = window.innerHeight;
		var ratio = width/1920;
		videoplaytime=document.createElement("canvas");
        videoplaytime.width=width+"px";
		videoplaytime.height=150*ratio+"px";
		videoplaytime.style.position="absolute"
		videoplaytime.style.top="0px";
		videoplaytime.style.left="0px";
		videoplaytime.style.display="none";
		videoplaytime.style.backgroundColor = "rgba(0,0,0,0.5)";
		ctx= videoplaytime.getContext("2d");
		
		currentTime = document.createElement("div");
		currentTime.className = "progressCurrentTime";
		currentTime.style.width = 100*ratio+"px";
		currentTime.style.height = 40*ratio+"px";
		currentTime.style.top = 60*ratio+"px";
		currentTime.style.left = 0*ratio+"px";
		currentTime.style.backgroundColor = "rgba(0,0,0,0.3)";
        currentTime.style.borderRadius="25px";
		currentTime.style.backgroundSize = "100% 100%";
		currentTime.style.position = "absolute";
		currentTime.style.display = "none";
		currentTime.style.font = 38*ratio+"px 优酷";
		currentTime.style.color = "#FFFFFF";
		currentTime.style.zIndex=1;
		currentTime.style.textAlign = "center";
		//currentTime.style.lineHeight = 40*ratio+"px";
		
		_playtimeline=document.createElement("img");
		_playtimeline.width=20*ratio;
		_playtimeline.height=50*ratio;
		_playtimeline.style.top=125*ratio+"px";
		_playtimeline.style.left="0px";
		_playtimeline.src="../icon/current.png";
		_playtimeline.style.position="absolute"
		_playtimeline.style.display="none";
		_playtimeline.style.transform='translate(-50%, -50%)';
	   //$(videoplaytime).addClass('mycanvas');
		//volume 
		_videovolume=document.createElement("canvas");
        _videovolume.style.position="absolute";
		_videovolume.width=30;
		_videovolume.height=300;
		_videovolume.style.left=1200+"px";
		_videovolume.style.top=200+"px";
		_videovolume.style.display="none";
		//document.body.appendChild(_videovolume);
		
		//img
		_videopauseimg=document.createElement("img");
		_videopauseimg.src="http://tv.qcast.cn/homepage/player/icon/pause.png";
		_videopauseimg.width=235/2;
		_videopauseimg.height=236/2;
		_videopauseimg.style.left=width/2+"px";
		_videopauseimg.style.top=height/2+"px";
		_videopauseimg.style.transform='translate(-50%, -50%)';
		_videopauseimg.style.display="none";
		_videopauseimg.style.position="absolute";
				
		_videoplaycontain=document.createElement("div");
		_videoplaycontain.appendChild(currentTime);
		_videoplaycontain.appendChild(_playtimeline);
		_videoplaycontain.appendChild(videoplaytime);
		_videoplaycontain.appendChild(_videovolume);
		_videoplaycontain.appendChild(_videopauseimg);
		//document.body.appendChild(_videoplaycontain);

		_player_container=document.createElement("div");
		_player_container.style.width='100%';
		_player_container.style.height='100%';	
		_player_container.style.left=0;//-24*widthscreen/100;
		_player_container.style.top=0;
		_player_container.style.backgroundColor="black";
		_player_container.style.position="absolute";
		//player spin
		_playerSpinContain=document.createElement("div");
		_playerSpinContain.style.width='100%';
		_playerSpinContain.style.height='100%';	
		_playerSpinContain.style.left='0px';
		_playerSpinContain.style.top='0px';
		_playerSpinContain.style.position="absolute";
		
		_video=document.createElement("video");
		_video.src="";
		_video.style.width='100%';
		_video.style.height='100%';	
		_video.style.left="0px";//-24*widthscreen/100;
		_video.style.top="0px";//-32.578*widthscreen/100;//17*widthscreen/100;		
		_video.style.position="absolute";
		
		netSpeed=document.createElement("span");
		netSpeed.style.position="absolute";
		netSpeed.style.width=100+"px";
		netSpeed.style.height=30+"px";
		//netSpeed.style.top=_player_container.clientHeight/2+70+"px";
		netSpeed.style.zIndex=0;
		netSpeed.style.textAlign="center";
		netSpeed.style.color="rgb(151, 161, 178)";
		netSpeed.style.fontSize="20px";
		netSpeed.style.display="none";
		$(netSpeed).css({
				
				"left": "50%",
				"transform": "translate(-50%, -50%)",
			});
		_player_container.appendChild(_video);
		_player_container.appendChild(_videoplaycontain);
		_player_container.appendChild(_playerSpinContain);
		_player_container.appendChild(netSpeed);
		
		 addVideoEventListeners();
	};
	
	this.registerVideoEventListener = function(id, callback_){
		var obj = new Object();
		obj.id = id; //identify the params
		obj.callback = callback_;
		event_listener.push(obj);
	};
	
	this.unregisterVideoEventListener =function(id){
		for(var i=0; i<i< event_listener.length; i++){
			if(event_listener[i].id == id)
			{
				event_listener.splice(i,1);
				break;
			}
		}
	};
	
	//'autoplay', 'preload'
	this.setVideoParam=function(json){
		if(typeof json == 'undefined')
			return;
		if(typeof json.autoplay !='undefined'){
			_video.autoplay=json.autoplay;
		}
		if(typeof json.preload != 'undefined'){
			_video.preload = json.preload;
		}
		if(typeof json.loop != 'undefined'){
			_video.loop = json.loop;
		}	
	};
	
	this.isVideoPlaying = function(){
		return !_video.paused;
	};
	this.getVideoZIndex = function(){
		return video_zindex;
	};
	this.setVideoZIndex = function(index){
		video_zindex = index;
		_video.style.zIndex=index;
	};
	this.setVideoDisplay=function(dp){
		_video.style.display=dp;
		_videoplaycontain.style.display=dp;

	}
	/*fullScreen size
	  0->original
	  1->fullscreen
	  2->16:9
	  3->4:3
	*/
	this.setVideoAspectRatio = function(ar){
		var ratio=null;
		if(ar==0){
			ratio='origin';
		}else if(ar==1){
			ratio='full';
		}else if(ar==2){
			ratio= '16:9';
		}else if(ar==3){
			ratio='4:3';
		}
		if(typeof _video.videoAspectRatio != 'undefined' && _video.videoAspectRatio)
		{
			_video.videoAspectRatio = ratio;
		}
		else{
			console.log('aspect ratio is not supported');
		}
	
	};
	this.setShowProgressBarSign=function(){
		showProgressBarSign=false;
	}
	this.enterFullScreenVideo = function(){	
		//videoplaytime.style.display="block";
		var width = window.innerWidth;
		var height = window.innerHeight;
		var ratio = width/1920;
		videoplaytime.width=width;
		videoplaytime.height=150*ratio;
		videoplaytime.style.zIndex=video_zindex+1;
		_videoplaycontain.style.display="block";
			
		if(!_video.paused) {
			_videopauseimg.style.display="none";
			counter=0;
		}
		_firstenterfullScreen=true;
		_isFullScreen=true;
		_player_container.style.position="fixed";
		_player_container.style.zIndex=video_zindex;
		_videoplaysign=true;
		volumedisplay=0;
		if(showProgressBarSign){
			showProgressBar();
			enableProgressDrawTimer();
		}else{
			
		}
		setTimeout(fullScreenChangeback(),0);
		/*if(netSpeed.style.display=="block"){
			stopSpinner();
			spin();
		}*/
	 };
	this.setVideoTarget = function(parent, position){
		parent.insertBefore(_player_container,$(parent).children().get(position));
	 };
	this.setVideoSrc = function(src){
		_video.src=src;
		console.log(" _video.src= "+_video.src);
	};
	this.setVideoPoster=function(img){
		_video.poster=img;
	} 
	this.exitVideoPlayer=function(){
		_video.src="about:null";
		_video.style.display="none";
		_videoplaycontain.style.display="none";
	}

	this.exitFullScreenVideo = function (){
		if(this.isVideoFullScreen()){
			videoplaytime.style.display="none";
			_videopauseimg.style.display="none";
			_videoplaycontain.style.display="none";
			_videovolume.style.zIndex="";
			_videovolume.style.display="none";
			videoplaytime.style.zIndex="";
			_player_container.style.position="absolute";
			_player_container.style.zIndex="";
			_isFullScreen=false;
			_firstenterfullScreen=false;
			disableProgressDrawTimer();			
			setTimeout(fullScreenChangeback(),0);
			/*if(netSpeed.style.display=="block"){
				stopSpinner();
				spin();
			}*/
		}
	 };
	 //time: second
	this.seekVideo = function(time){
		if(this.isVideoFullScreen()){
			if(!useCss){
				 //show control bar
				 if(_seek_effective_timer2){
					window.clearTimeout(_seek_effective_timer2);
					_seek_effective_timer2 = null;
				}
				drawProgressBar();
				showProgressBar();
				enableProgressDrawTimer();
				var width = 1143;//clientWidth;
				var height=80;//clientHeight;
				var c= videoplaytime;
				var ctx=c.getContext("2d");	
				var maxduration = _video.duration;
				//set video current time
				
				var currentBuffer;
				if(time>0&&time<(maxduration-3)){
					currentBuffer = time;
				}else if(time<=0){
					currentBuffer =0;
				}else if(time>=(maxduration-3)){
					currentBuffer=maxduration-3;
				}
				_playtimeline.style.display="block";
				//videoplaytime.style.display="block";
				if(!_video.paused ) {
						_videoplaysign=true;
				}
				else{
						_videoplaysign=false;
				}
				var currentBuffer1 = 100 * (currentBuffer) / maxduration;
				if (isNaN(maxduration)||isNaN(currentBuffer)||maxduration==0){
						maxduration=0;
						currentBuffer=0;
						currentBuffer1=0;
					}
				var playtime=currentBuffer1*width/100;
				
				var time_hc=parseInt(currentBuffer/3600);		
				var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
				var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
				var timec=null;
				if(time_mc<10&&time_sc>9){
					timec="0"+time_mc+":"+time_sc;
					}else if(time_mc<10&&time_sc<10){
					timec="0"+time_mc+":0"+time_sc;
					}else if(time_mc>9&&time_sc<10){
					timec=time_mc+":0"+time_sc;
					}else{
					timec=time_mc+":"+time_sc;
					}
				if(time_hc<1){
					timec=timec;
				}else if(1<time_hc<10){
				timec="0"+time_hc+":"+timec;
				}else{
				timec=time_hc+":"+timec;
				}

				ctx.clearRect(0,0,width+120,height/2);
				ctx.font="30px";
				ctx.globalAlpha=0.8;
				ctx.fillStyle='#234f98';
				
				_playtimeline.style.zIndex=video_zindex+5;
				playeTime=currentBuffer;
				ctx.fillRect(playtime,height/2-50,120,50);
				_playtimeline.style.left=playtime+61+"px";
				//ctx.stroke();
				//set video time text updatetime
				ctx.fillStyle="#FBFFFB";
				ctx.textAlign="center";
				if(playtime<0){
					ctx.fillText(timec,parseInt(60),1*height/2-10);
				}
				else if(playtime>width){
					ctx.fillText(timec,parseInt(width)+60,1*height/2-10);
				}else{
					ctx.fillText(timec,parseInt(playtime)+60,1*height/2-10);
				}		
				
				_seek_effective_timer2 = window.setTimeout(function(){			
					_video.currentTime = playeTime;
					ctx.clearRect(0,0,width+120,height/2);
					_playtimeline.style.display="none";
					counter=0;
					_firstenterfullScreen=true;
				}, 1500);
			}
		}else{
			var maxduration = _video.duration;
			//set video current time			
			var currentBuffer;
			if(time>0&&time<(maxduration)){
				currentBuffer = time;
			}else if(time<=0){
				currentBuffer =0;
			}else if(time>=(maxduration)){
				currentBuffer=maxduration;
			}
			_video.currentTime =currentBuffer;
		}
	 };
	
	this.playPause = function() {
		if(_video.paused) {
			_videopauseimg.style.display="none";
			counter=0;
			_videoplaysign=true;
			_firstenterfullScreen=true;
			_video.play();
			if(showProgressBarSign&&updateSign)
			enableProgressDrawTimer();
		}
		else {
			_videopauseimg.style.display="block";
			_videopauseimg.style.zIndex=video_zindex+1;
			//videoplaytime.style.display="block";
			if(showProgressBarSign&&updateSign){
				drawProgressBar();
				showProgressBar();
				disableProgressDrawTimer();
			}
			_videoplaysign=false;
			_firstenterfullScreen=true;
			_video.pause();
		}
	};
	this.regulateVideoVolume = function(Rv){		
		if(!useCss){
			
			var width =_videovolume.width;
			var height=_videovolume.height;
			var volumeheight=height-40;
			var vcr=_videovolume.getContext("2d");
			showVolumeProgressBar();
			_videovolume.style.zIndex=video_zindex+1;
			
			//set linewidth color
			vcr.lineWidth = 1;
			vcr.strokeStyle='#234f98';
			var volume = _video.volume;
			var max_vol = 1;
			if(typeof jVolumeController != 'undefined'){
				max_vol = jVolumeController.getMaxVolume();
				volume = jVolumeController.getVolume() + Rv*max_vol;
				if(volume < 0)
					volume = 0;
				if(volume > max_vol)
					volume = max_vol;
				if(Rv > 0)
					volume = Math.floor(volume);
				else
					volume = Math.ceil(volume);
				jVolumeController.setVolume(volume);
				volumepercent=100*volume/max_vol*(height-50)/100;
			}
			else{
				volume=_video.volume+Rv;
				if(volume>1.0){
					_video.volume=1.0;
				}else if(volume<=0.0){
					_video.volume=0.0;
				}else{			
					_video.volume=volume;
				}
				volumepercent=100*_video.volume*(height-50)/100;			
			}
			
			vcr.clearRect(0,0,width,height);
			vcr.font="15px ";
			//set linewidth color
			vcr.lineWidth = 1;
			vcr.strokeStyle='#234f98';//set pen color
			vcr.strokeRect(0,0,width,height-50);
			//set background color globalAlpha
			
			vcr.globalAlpha=0.8;
			vcr.fillStyle='#5e5e68';
			vcr.fillRect(0,0,width,height-50);
			//canvas video time globalAlpha coloe
			vcr.globalAlpha=1;
			vcr.fillStyle='#234f98';
			vcr.fillRect(0,((_videovolume.height-50)-volumepercent),width,volumepercent);
			vcr.stroke();
			vcr.fillStyle="#FBFFFB";
			vcr.textAlign="center";
			//consle.log("video.volume= "+_video.volume*100);
			vcr.fillText(Math.floor(volume/max_vol*100),width/2,(_videovolume.height-20));
		}
	};
	this.isVideoFullScreen=function(){
		return _isFullScreen;
	};
	this.getVideoCurrentTime=function(){
		return parseInt(_video.currentTime);
	};
	this.getVideoDuration=function(){
		return parseInt(_video.duration);
	};
	this.getVideoWidth=function(){
		return _video.videoWidth;
	}
	this.getVideoHeight=function(){
		return _video.videoHeight;
	}
	this.getVideoSrc=function(){
		return _video.src;
	}
	this.keydownProcess = function(param)
    {
		if(this.isVideoFullScreen()){
			switch(param)
			{
				case 38:					
					//this.regulateVideoVolume(0.1);												
					return true;
				case 40:   //down				
					//this.regulateVideoVolume(-0.1);							
					return true;
				case 37:   //left
					changeVideoTime(-10);
					return true;
				case 39:   //right
					changeVideoTime(10);
					return true;
				case 13:   //enter
					this.playPause();
				    return true;
				case 27:    //back, here is esc
				case 4:
					this.exitFullScreenVideo();
					return true;
				default:
					return false;
			}
		}
        return false;
    };
	this.setStartTime = function(t){
		if(_video && typeof _video.startTime != 'undefined'){
			_video.startTime = t;
			return true;
		}
		else{
			return false;
		}			
	};
	this.setVideoInformation=function(vinfo){
		return videoinfo=vinfo;
	}
	var netspeed=0;
	var clearSpinInterval=function(){
		if(listening_Spin){
			window.clearInterval(listening_Spin);
			listening_Spin = null;
		}
	}
	
	var spin = function(){
		//console.log("---visible video spin---");
		if(!spinner){			
			
			listening_Spin = window.setInterval(function(){
				if(typeof qcastTop!="undefined"){
					if(qcastTop.getNetSpeed()<=1000){	
						netspeed=qcastTop.getNetSpeed()+"kb/s";
					}else{
						netspeed=(qcastTop.getNetSpeed()/1024).toPrecision(2)+"Mb/s";
					}
				}
				//console.log("video netspeed = "+netspeed);
				netSpeed.innerHTML=netspeed;
				
			}, 2000);
			startSpinner();
		}
		
	};
	var spin_timer=null;
	var startSpinner = function(){
		
		if(_video.clientHeight!=0){
			if(typeof qcastTop!="undefined"){
				if(qcastTop.getNetSpeed()<=1000){	
						netspeed=qcastTop.getNetSpeed()+"kb/s";
				}else{
					netspeed=(qcastTop.getNetSpeed()/1024).toPrecision(2)+"Mb/s";
				}
			}
				//console.log("video netspeed = "+netspeed);
			netSpeed.innerHTML=netspeed;
			netSpeed.style.top=_video.clientHeight*49/100+55+"px";
			console.log("video netSpeed top ="+_video.clientHeight*49/100+55);			
			netSpeed.style.display="block";
			_playerSpinContain.style.display="block";
			console.log("in startSpinner spinner = "+spinner);
			if(spinner==null)
			spinner = new Spinner(opts).spin(_playerSpinContain);				
		}
		else{
			stopSpinner();
			if(spin_timer){
				clearTimeout(spin_timer);
				spin_timer = null;
			}
			spin_timer = window.setTimeout(function(){
				startSpinner();
			},500);
			
		}
	};
	
	var stopSpinner = function(){
		//console.log("in stopSpin spinner = "+spinner);
		if(spinner!=null){
			netspeed=0;
			netSpeed.style.display="none";
			spinner.stop();
			spinner = null;			
			_playerSpinContain.style.display="none";
		}		
		clearSpinInterval();
	};
	//private functions
	var pausesign=false;
	var loadstartsign=null;
	var addVideoEventListeners = function(){
		_video.addEventListener('ended', function(){
			console.log("--listening video ended--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"ended"};
				obj.callback(param);
			}
		});
		_video.addEventListener('playing', function(){
			console.log("--listening video playing--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"playing"};
				obj.callback(param);
			}
		});
		_video.addEventListener('error', function(){
			console.log("--listening video error--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"error"};
				obj.callback(param);
			}
			spin();
		});
		_video.addEventListener('pause', function(){
			//draw a play button
			console.log("--listening video pause--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"pause"};
				obj.callback(param);
			}
			if(listeningPSign){
				window.clearTimeout(listeningPSign);
				listeningPSign = null;
			}
			listeningPSigns = window.setTimeout(function(){			
				stopSpinner();			
			}, 1000);
		});
		_video.addEventListener('play', function(){
			//console.log("--listening video play--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"play"};
				obj.callback(param);
			}
		});
		
		_video.addEventListener('emptied', function(){
			//console.log("--listening video emptied--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"emptied"};
				obj.callback(param);
			}
		});
		_video.addEventListener('canplay', function(){
			//console.log("--listening video canplay--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"canplay"};
				obj.callback(param);
			}

		});
		_video.addEventListener('canplaythrough', function(){
			//console.log("--listening video canplaythrough--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"canplaythrough"};
				obj.callback(param);
			}
			
		});
		_video.addEventListener('durationchange', function(){
			console.log("--listening video durationchange--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"durationchange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadeddata', function(){
			//console.log("--listening video loadeddata--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadeddata"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadedmetadata', function(){
			//console.log("--listening video loadedmetadata--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadedmetadata"};
				obj.callback(param);
			}
		});
		_video.addEventListener('loadstart', function(){
			console.log("--listening video loadstart--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"loadstart"};
				obj.callback(param);
			}
			loadstartsign=true;
			//stopSpinner();
			//spin();
		});
		_video.addEventListener('progress', function(progress){
			//console.log("--listening video progress--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"progress"};
				obj.callback(param);
			}
		});
		_video.addEventListener('ratechange', function(){
			//console.log("--listening video ratechange--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"ratechange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('seeked', function(){
			console.log("--listening video seeked--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"seeked"};
				obj.callback(param);
			}
			if(listeningPSign){
				window.clearTimeout(listeningPSign);
				listeningPSign = null;
			}
			loadstartsign=false;
			listeningPSigns = window.setTimeout(function(){			
				stopSpinner();
				
			}, 1100);
			
		});
		_video.addEventListener('seeking', function(){
			//console.log("--listening video seeking--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"seeking"};
				obj.callback(param);
			}
			if(!loadstartsign){
				stopSpinner();
				spin();
			}
		});
		_video.addEventListener('stalled', function(){
			console.log("--listening video stalled--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"stalled"};
				obj.callback(param);
			}
		});
		_video.addEventListener('suspend', function(){
			//console.log("--listening video suspend--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"suspend"};
				obj.callback(param);
			}
		});
		_video.addEventListener('timeupdate', function(){
			//console.log("--listening video timeupdate--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"timeupdate"};
				obj.callback(param);
			}	
			stopSpinner();
			if(listeningNetSpeed){
				window.clearTimeout(listeningNetSpeed);
				listeningNetSpeed = null;
			}
			listeningNetSpeed = window.setTimeout(function(){			
				stopSpinner();
				spin();
			}, 1000);			
		});
		_video.addEventListener('volumechange', function(){
			console.log("--listening video volumechange--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"volumechange"};
				obj.callback(param);
			}
		});
		_video.addEventListener('waiting', function(){
			//console.log("--listening video waiting--");
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"waiting"};
				obj.callback(param);
			}
		});
		
	};
	var fullScreenChangeback=function(){
		for(var i=0; i< event_listener.length; i++){
			var obj = event_listener[i];
			var param = {"id":obj.id, "event":"fullscreenchange"};
			obj.callback(param);
		}
	}
	var playerInit=function(){
		this.createVideoContainer();
	};
	var isProgressBarVisible = function(){
		return isVisible;
	};
	
	var showProgressBar = function(){
		if(!useCss){
			counter=0;
			videoplaytime.style.display="block";
			isVisible = true;
			//notify application
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"showprogress"};
				obj.callback(param);
			}	
		}
	};

	var hideProgressBar = function(){
		disableProgressDrawTimer();
		if(!useCss){
			videoplaytime.style.display="none";
			isVisible = false;
			//notify application
			for(var i=0; i< event_listener.length; i++){
				var obj = event_listener[i];
				var param = {"id":obj.id, "event":"hideprogress"};
				obj.callback(param);
			}	
		}
	};
	
	var showVolumeProgressBar=function(){
		isVisibleVolume=true;
		if(!useCss){
			volumedisplay=0;
			_videovolume.style.display="block";
			///isVisible = true;
		}
	}
	var hideVolumeProgressBar=function(){
		isVisibleVolume=false;
		if(!useCss){
			_videovolume.style.display="none";
			//isVisible = false;
		}
	}
	var disableProgressDrawTimer = function(){
		isTimerEnabled = false;
		if(_draw_progressbar_timer){
			window.clearInterval(_draw_progressbar_timer);
			_draw_progressbar_timer = null;
		}
	};
	
	var drawProgressBar = function(){
		if(!useCss){
			var width = window.innerWidth;
			var ratio = width/1920;		
			var height=150*ratio;
			counter=counter+1;	
			//console.log("counter = "+counter);
			if(counter==10&&_videoplaysign)
			{
				hideProgressBar();
				counter=0;
			}
			volumedisplay=volumedisplay+1;		
			if(volumedisplay==10&&isVisibleVolume)
			{
				hideVolumeProgressBar();
				volumedisplay=0;
			}
			if(volumedisplay>10){
				volumedisplay=0;
			}
			var currentBuffer = _video.currentTime;
			var maxduration = _video.duration;
				
			if (isNaN(maxduration)||isNaN(currentBuffer)){
				maxduration=0;
				currentBuffer=0;
			}
				
			var percentage = 100 * (currentBuffer) / maxduration;
			if(maxduration==0){
				percentage=0;
			}
			var playtime=percentage*width/100;
			var time_h=parseInt(maxduration/3600);		
			var time_m=parseInt(maxduration/60-parseInt(maxduration/3600)*60);
			var time_s=parseInt(maxduration-parseInt(maxduration/60)*60);
			var time=null;
			if(time_m<10){
				time_m="0"+time_m;
			}
			if(time_s<10){
				time_s="0"+time_s;
			}
			if(time_h<1){
			time=time_m+":"+time_s;
			}else if(1<time_h<10){
				time="0"+time_h+":"+time_m+":"+time_s;
			}
			else{
			time=time_h+":"+time_m+":"+time_s;
			}
			var time_hc=parseInt(currentBuffer/3600);		
			var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
			var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
			var timec=null;
			if(time_mc<10&&time_sc>9){
				timec="0"+time_mc+":"+time_sc;
				}else if(time_mc<10&&time_sc<10){
				timec="0"+time_mc+":0"+time_sc;
				}else if(time_mc>9&&time_sc<10){
				timec=time_mc+":0"+time_sc;
				}else{
				timec=time_mc+":"+time_sc;
				}
			if(time_hc<1){
				timec=timec;
			}else if(1<time_hc<10){
			timec="0"+time_hc+":"+timec;
			}else{
			timec=time_hc+":"+timec;
			}
			//percentage = 100 * (currentBuffer) / maxduration;
			if(percentage> 100) {			
				percentage = 100;
			}
			if(percentage <=0) {
				percentage = 0;
			}
			
			ctx.clearRect(0,0,width,height);
			
			//set linewidth color
			//ctx.lineWidth = 1;
			//ctx.strokeStyle='#234f98';//set pen color
			//ctx.rect(0,20*ratio,width,height/2);
			
			//ctx.globalAlpha=0.8;			
			ctx.fillStyle="#2F2F2F";
			ctx.fillRect(0,130*ratio,width,20*ratio);
			
			ctx.globalAlpha=1;
			ctx.fillStyle='#0087fa';
			ctx.fillRect(0,130*ratio,playtime,height-130*ratio);
			
			ctx.font=46*ratio+"px 优酷";
			ctx.fillStyle="#ffffff";
			ctx.textAlign="left";
			ctx.fillText(videoinfo,53*ratio,88*ratio);
			ctx.font=38*ratio+"px 优酷";
			ctx.fillStyle="#ffffff";
			ctx.textAlign="right";
			if(typeof qcastTop!="undefined"){
				if(qcastTop.getNetSpeed()<=1000){	
						netspeed=qcastTop.getNetSpeed()+"kb/s";
				}else{
					netspeed=(qcastTop.getNetSpeed()/1024).toPrecision(2)+"Mb/s";
				}
			}
			var timeShow = timec+'/'+time;			
			ctx.fillText(netspeed,width-18*ratio,58*ratio);
			ctx.fillText(timeShow,width-18*ratio,116*ratio);		
		}				
	};
	var enableProgressDrawTimer = function(){
		isTimerEnabled = true;
		drawProgressBar();
		if(_draw_progressbar_timer)
			return;
		_draw_progressbar_timer = window.setInterval(function(){
			if(!isProgressBarVisible()&&!isVisibleVolume)
				return;
			drawProgressBar();
		 }, 500);
	};
	
	
	var changeVideoTime= function(Tx){
		if(!useCss){
			if(_seek_effective_timer){
				window.clearTimeout(_seek_effective_timer);
				_seek_effective_timer = null;
			}
			
			var width = window.innerWidth;
			var ratio = width/1920;		
			var height=150*ratio;
			var maxduration = _video.duration;
			if(Tx<0){
				if(maxduration>=3600){
					Tx=-30;
				}else if(maxduration>=1800)
				{
					Tx=-20;
				}else if(maxduration>=1200)
				{
					Tx=-15;
				}else if(maxduration>=300)
				{
					Tx=-10;
				}else 
				{
					Tx=-5;
				}
				
			}else{
				if(maxduration>=3600){
					Tx=30;
				}else if(maxduration>=1800)
				{
					Tx=20;
				}else if(maxduration>=1200)
				{
					Tx=15;
				}else if(maxduration>=300)
				{
					Tx=10;
				}else 
				{
					Tx=5;
				}
			}
			if(currenttime == -1){
				drawProgressBar();
				if((_video.currentTime+Tx)>0
				&&(_video.currentTime+Tx)<(maxduration-3)){
					
					currenttime = _video.currentTime+Tx;
				
				}else if((_video.currentTime+Tx)<=0){
					
					currenttime =0;
				
				}else if((_video.currentTime+Tx)>=(maxduration-3)){
					
					currenttime=maxduration-3;
				
				}
				
				_playtimeline.style.display="block";
				videoplaytime.style.display="block";
				if(!_video.paused ) {
					_videoplaysign=true;
				}else{
					_videoplaysign=false;
				}
				
			}
			else{if((currenttime +Tx)>0
			&&(currenttime +Tx)<maxduration-3){
				currenttime += Tx;
				}else if((currenttime+Tx)<=0){
					currenttime =0;
				}else if((currenttime+Tx)>=(maxduration-3)){
					currenttime=maxduration-3;
				}
			}	
			
			showProgressBar();
			enableProgressDrawTimer();
			//videoplaytime.style.display="block";
			isVisible = false;
			var currentBuffer=currenttime;
			var currentBuffer1 = 100 * (currenttime) / maxduration;
			if (isNaN(maxduration)||isNaN(currentBuffer)||maxduration==0){
					maxduration=0;
					currentBuffer=0;
					currentBuffer1=0;
				}
			var playtime=currentBuffer1*width/100;
			
			if(currentBuffer>= maxduration) {			
				currentBuffer = maxduration-5;
			}
			if(currentBuffer < 0) {
				currentBuffer = 0;
			}
			
			var time_hc=parseInt(currentBuffer/3600);		
			var time_mc=parseInt(currentBuffer/60-parseInt(currentBuffer/3600)*60);
			var time_sc=parseInt(currentBuffer-parseInt(currentBuffer/60)*60);
			var timec=null;
			if(time_mc<10&&time_sc>9){
				timec="0"+time_mc+":"+time_sc;
				}else if(time_mc<10&&time_sc<10){
				timec="0"+time_mc+":0"+time_sc;
				}else if(time_mc>9&&time_sc<10){
				timec=time_mc+":0"+time_sc;
				}else{
				timec=time_mc+":"+time_sc;
				}
			if(time_hc<1){
				timec=timec;
			}else if(1<time_hc<10){
			timec="0"+time_hc+":"+timec;
			}else{
			timec=time_hc+":"+timec;
			}

			ctx.clearRect(0,130*ratio,width,height-130*ratio);
			//ctx.lineHeight="30px";
			//ctx.globalAlpha=0.8;
			//ctx.fillStyle='#234f98';
			
			_playtimeline.style.zIndex=video_zindex+5;
			currentTime.style.zIndex=video_zindex+5;
			playeTime=currentBuffer;
			if(playtime<0){
				playtime=0;
				playeTime=0;
			}
			else if(playtime>width){
				playtime=(maxduration-3)*100*width/maxduration/100;
				playeTime=maxduration-3;
			}else{		
			}
			
			ctx.fillStyle="#2F2F2F";
			ctx.fillRect(0,130*ratio,width,20*ratio);
			
			ctx.globalAlpha=1;
			ctx.fillStyle='#0087fa';
			ctx.fillRect(0,130*ratio,playtime,height-130*ratio);
			//ctx.fillRect(playtime,height/2,120,50);
			_playtimeline.style.left=playtime+"px";
			//ctx.stroke();
			//set video time text updatetime
			ctx.fillStyle="#FBFFFB";		
			ctx.textAlign="center";
			updateSign=false;
			currentTime.style.display = "block";
			 if(currentBuffer>=3600){
				currentTime.style.left = playtime-80*ratio+"px";
                currentTime.style.width=160*ratio+"px";
            }else{
				currentTime.style.left = playtime-60*ratio+"px";
                currentTime.style.width=120*ratio+"px";
            }
			currentTime.textContent = timec;
			/*if(playtime<0){
				ctx.fillText(timec,parseInt(60),1*height/2-10);
			}
			else if(playtime>width){
				ctx.fillText(timec,parseInt(width)+60,1*height/2-10);
			}else{
				ctx.fillText(timec,parseInt(playtime)+60,1*height/2-10);
			}	*/	
			//ctx.fillText(timec,parseInt(playtime),110*ratio);
			_seek_effective_timer = window.setTimeout(function(){			
				_video.currentTime = playeTime;
				ctx.clearRect(0,130*ratio,width,height-130*ratio);
				ctx.fillStyle="#2F2F2F";
				ctx.fillRect(0,130*ratio,width,20*ratio);
				ctx.fillStyle='#0087fa';
				ctx.fillRect(0,130*ratio,_video.currentTime*width/maxduration,height-130*ratio);
				_playtimeline.style.display="none";
				currentTime.style.display = "none";
				currenttime = -1;
				counter=0;
				isVisible = true;
				updateSign=true;
			}, 1500);
		}	
	 };
};
