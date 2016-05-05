var _fnUtil = {
    	dataFormat:function(arr){
			var newArr = [];
			for (var i = 0; i < Math.ceil(arr.length/2); i++) {
				newArr[i] = [];
				newArr[i].push(arr[2*i]);
				newArr[i].push(arr[2*i+1]);
			};
			return newArr;
		},
    	pullToRefresh:function(opts){
    		var handler = opts.view.handler;
    		var ptrHeight = opts.ptrHeight || 35;
    		// var imgLoader = opts.imgLoader || '/course-hardwork/images/ajax-loader.gif';
    		var imgArrow = opts.imgArrow || '/web-hardwork/images/refresh@44x44.png';
    		var vm = opts.view.vm;
    		var myScroll = opts.view.myScroll;
    		
    		var that = this;
    		
		    var ptrHeight = ptrHeight;
		    var $objScroll = $(handler);

		    myScroll.scrollBy(0, -ptrHeight);
		    
		    var head = $objScroll.find('.head img'),
		        topImgHasClass = head.hasClass('up');

		    var foot = $objScroll.find('.foot img'),
		        bottomImgHasClass = head.hasClass('down');
		     var headht = $objScroll.find('.head span');
		    myScroll.on('scroll', function () {
		        var y = this.y,
		            maxY = this.maxScrollY - y;
		        if (y >= 0) {
		            !topImgHasClass && head.addClass('up');
		            headht.html('松开刷新');
		            return '';
		        }
		        if (maxY >= 0) {
		            !bottomImgHasClass && foot.addClass('down');
		            return '';
		        }
		    });
		    
		    

		    myScroll.on('scrollEnd', function () {
		    	  	
		           
		        if (this.y >= -ptrHeight && this.y < 0) {
		            myScroll.scrollTo(0, -ptrHeight);

		        } else if (this.y >= 0) {
		        	headht.html('下拉刷新');
		        	head.addClass('active');
		           
		            //TODO ajax下拉刷新数据
		          	
		            // vm.datalist = that.dataFormat(vm.dataLiveList);
		            setTimeout(function(){
		            	 myScroll.refresh();
				         myScroll.scrollTo(0, -ptrHeight);
				         head.removeClass('active');
		            },1000);
		           
		        }

		        var maxY = this.maxScrollY - this.y;
		        if (maxY > -ptrHeight && maxY < 0) {
		            var self = this;
		            myScroll.scrollTo(0, self.maxScrollY + ptrHeight);
		            foot.removeClass('down')
		        } else if (maxY >= 0) {
		            // foot.attr('src', imgLoader);
		            //TODO ajax上拉加载数据


		            var self = this;
		            
		                // $.ajax({
		                // 	url:'/api/getLivelist.do',
		                // 	type:'get',
		                // 	data:{type:'more'},
		                // 	success:function(res){
		                // 		//console.log(res.data);
		                // 		vm.dataLiveList.pushArray(res.data);
		                // 		vm.datalist = that.dataFormat(vm.dataLiveList);
		                // 		myScroll.refresh();
				              //   myScroll.scrollTo(0, self.y + ptrHeight);
				              //   foot.removeClass('down');
				              //   foot.attr('src', imgArrow);
		                // 	}
		                // });
		                
		            
		        }
		    })
    	}
    }        

    module.exports = _fnUtil;         