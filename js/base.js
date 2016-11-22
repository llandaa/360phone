$(function(){
	$('.repair-btn').on('click',function(){
		$('.page-one-top').addClass('bgcolor')
		$('.grade-img').addClass('rotate360')
		
		$('.page-one-top').find('p').css({
			"margin-left":"32%"
		})
		$('.page-one-top').css({
			"padding-top":"10px"
		})
		$('.am-header-default').addClass('bgcolor')
		showNum()
		
	function showNum(){
		var num=58
		setInterval(function(){
			if(num<100){
				num ++;
				console.log(num)
				$('.page-one-top').find('h1').html(num)
			}
			if(num==100){
				$('.repair-btn').text("猜你喜欢")
				$('.grade-img').attr('src','img/crileone.png')
				$('.am-icon-warning').hide()
			}
		},110)
	}
	})
	/****添加*******/
	$('.tianjia-btn').on('click',function(){
		/*var jiazai  = $("<i class='am-icon-spinner am-icon-spin'></i>")
		$(this).text("")
		$(this).append(jiazai)*/
		/*$(this).addClass('disabled')*/
		if($(this).hasClass('tianjiashouxin')){
			var tianjiacontent =$("<div class='top3-tubiao am-fl'><img src='img/shouxin_03.png' class='am-img-responsive'/><p style='margin: 0;margin-top: 10px;color: #888;font-size: 14px;'>手心</p></div>")
			if($(".page-two-top1-content").children().length == 9){
				$('.page-two-top1').height(500)
			}
			$(".page-two-top1-content").append(tianjiacontent)
			tianjiacontent.insertBefore($('.gengduobox'))
			$(this).parent().siblings().eq(0).children().eq(0).attr("src","img/youxi_03.png")
			$(this).parent().prev().children().eq(0).text("游戏加速")
			$(this).parent().prev().children().eq(1).text("加速游戏，告别卡顿")
			$(this).parent().prev().children().eq(2).text("523万用户已添加")
			$(this).removeClass('tianjiashouxin').add('tianjiayouxi')
		}
		if($(this).hasClass('tianjiaqiujiu')){
			var tianjiacontent =$("<div class='top3-tubiao am-fl'><img src='img/sos_03.png' class='am-img-responsive'/><p style='margin: 0;margin-top: 10px;color: #888;font-size: 14px;'>一键求救</p></div>")
			if($(".page-two-top1-content").children().length == 9){
				$('.page-two-top1').height(500)
			}
			$(".page-two-top1-content").append(tianjiacontent)
			tianjiacontent.insertBefore($('.gengduobox'))
			$(this).parent().siblings().eq(0).children().eq(0).attr("src","img/jiarenfang_03.png")
			$(this).parent().prev().children().eq(0).text("家人防护")
			$(this).parent().prev().children().eq(1).text("帮家人识别诈骗电话")
			$(this).parent().prev().children().eq(2).text("223万用户已添加")
			$(this).removeClass('tianjiaqiujiu').add('tianjiajiaren')
		}
	})
	/*********换肤*********/
	$('.huanfu-btn').on('click',function(){
		$('.home-header').removeClass('active');
		$('.huanfu-header').addClass('active');
		$('.am-tabs').hide()
		$('.huanfu-box').show()
	})
	$('.fanhuishouye').on('click',function(){
		$('.home-header').addClass('active');
		$('.huanfu-header').removeClass('active');
		$('.am-tabs').show()
		$('.huanfu-box').hide()
	})
	/*******换肤*********/
	$('.bg-bian').on('click',function(){
		var bgimg = $(this).attr("src")
		console.log($('#tupian').val())
		$('.page-one-top').css({
			"background-image":"url("+bgimg+")",
			'background-size':"100% 100%"
		})
		$('.am-header-default').css({
			"background-image":"url("+bgimg+")",
			'background-color':"rgba(255,255,255,0)"
		})
		
	})
	/*$('#imghead').on('click',function(){
		alert($(this).attr('src'))
	})*/
})
//图片上传预览    IE是用了滤镜。
        function previewImage(file)
        {
          var WIDTH  = 153.5; 
          var HEIGHT = 152.844;
          var div = document.getElementById('preview');
          var pageOneTop = document.querySelector('.page-one-top')
          var homeHeader = document.querySelector('.home-header')
          var huanfuHeader = document.querySelector('.huanfu-header')
          var amHeaderDefault = document.querySelector('.am-header-default')
          if (file.files && file.files[0])
          {
              div.innerHTML ='<img id=imghead class="bg-bian"><div class="am-thumbnail-caption"><input type="file" onchange="previewImage(this)" /></div>';
              var img = document.getElementById('imghead');
              img.onload = function(){
                img.width  =  WIDTH;
                img.height =  HEIGHT;
              }
              var reader = new FileReader();
              reader.onload = function(evt){img.src = evt.target.result;}
              reader.readAsDataURL(file.files[0]);
              img.onclick=function(){
              	var base = img.src
              	pageOneTop.style.backgroundImage='url('+base+')'
              	pageOneTop.style.backgroundSize="100% 100%"
             	homeHeader.style.backgroundImage='url('+base+')'
             	homeHeader.style.backgroundPosition="center top"
             	huanfuHeader.style.backgroundImage='url('+base+')'
             	amHeaderDefault.style.backgroundColor="rgba(255,255,255,0)"
             	
              }
          }
          else //兼容IE
          {
            var sFilter='filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod=scale,src="';
            file.select();
            var src = document.selection.createRange().text;
            div.innerHTML = '<img id=imghead>';
            var img = document.getElementById('imghead');
            img.filters.item('DXImageTransform.Microsoft.AlphaImageLoader').src = src;
            var rect = clacImgZoomParam(MAXWIDTH, MAXHEIGHT, img.offsetWidth, img.offsetHeight);
            status =('rect:'+rect.top+','+rect.left+','+rect.width+','+rect.height);
            div.innerHTML = "<div id=divhead style='width:"+rect.width+"px;height:"+rect.height+"px;margin-top:"+rect.top+"px;"+sFilter+src+"\"'></div>";
          }
        }
        function clacImgZoomParam( maxWidth, maxHeight, width, height ){
            var param = {top:0, left:0, width:width, height:height};
            if( width>maxWidth || height>maxHeight )
            {
                rateWidth = width / maxWidth;
                rateHeight = height / maxHeight;
                
                if( rateWidth > rateHeight )
                {
                    param.width =  maxWidth;
                    param.height = Math.round(height / rateWidth);
                }else
                {
                    param.width = Math.round(width / rateHeight);
                    param.height = maxHeight;
                }
            }
            
            param.left = Math.round((maxWidth - param.width) / 2);
            param.top = Math.round((maxHeight - param.height) / 2);
            return param;
        }
	