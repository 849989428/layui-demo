layui.extend({
	menu: '../menu'
}).define([
	'menu',
	'element', 
	'layer',
	'laypage'
], function (exports) {
    var $ = layui.jquery
    	,element = layui.element
    	,layer = layui.layer
    	,laypage = layui.laypage
    	,menu = layui.menu;

    // 私有
	var stores = {
		id: null,
		storeName: '',
		dataStatistics: function () {
			/**
			 * 获取店铺基础统计信息
			 * @type {Number}
			 */
    		layer.open({
    			type: 2,
    			area: ['640px', '340px'],
    			title: stores.storeName + ' 基础统计信息',
    			content: '../components/store/storeStatisiticsBasics.html?' + new Date().getTime() + '&store_id=' + stores.id
    		})
    	},

    	/**
    	 * 该店铺商家二维码
    	 * @return {[type]} [description]
    	 */
    	adminQrcode: function () {
            var qrcodePath = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACRklEQVRYR6WY4ZKEIAyD1/d/aG9wFibELy07t3/OA8WSJmnxuu/7/sjvuq6PDX3mGM3ps+N63DN+Yw291rn5DL3nGgGlRea4LpCC8pfPZ/x+XdODHnMYkN6oCPg43TfH9K+jONGKAXUp0wUceoVd0fBrT1Oixkj4xiFPT8WHGUwXCCFBqD2bnaR24lYE1ntTSj3YShjbhjQgRYMUMOcTJ2jeheHPvgLXlCUyOwou7xNF0WYpKw+HKvV0SLllJA/zoFMKF4dcSWRkpJQTjyIEyeNepO4UphyhHSapV9xzy8GU+QLJM8gSiMRkku7YC0UndfSHb42rkOnKB9lFq7JOMV1JIPImOyiLq0ZKXNEXkZf47r2mkSCo7CwOObmSb6SFO0J3HcUCxNsPlzvu4tvzEPmTiZLX0btiP9RB7IhS7fLUV6kuVXbShJGiqBlLCDtnV0CUMiewL+pp6eReWYnPrX6Iepauc0x1zh2fusjUwmwccudN/pGcvOuXO6Qfkk+ndsM7bqjklJJ6H/KkhO5W7V2GJ0iQX5FbOyX0XTqHAXn06QXVeIVw2vh4JqasQ+s0SFdsZ6blQbGD3o2PSEvqJTefAGy1LKkk7SrJuZO9znsmtpQRvLSb6hj0Mjo465O9rDGVvTPfF+8C9hTS/7Tmluru5Eq1aAZOBZXcPfGIxqPsiU/JPHXXXte8T6rWeGSfPsekdNGCVRrouJPGnrUpoP8UTU1nPHtJg/cSQfUFLR5Viq9kv6SP1IafYxJClfFRuSH+dAH/AalQwwSwUN1qAAAAAElFTkSuQmCC';
    		var content = '<div style="width: 180px;margin: 15px 30px;"><img width="100%" height="100%" src="' + qrcodePath + '" /></div>';
            content += '<p style="margin: 12px 0px 20px;color: #777;" align="center">微信扫一扫快速进入</p>';
            layer.open({
                type: 1,
                skin: 'temp-layer-admin-store layer-top-100',
                anim: 2,
                title: '商家后台二维码',
                content: content
            });
    	},

    	/**
    	 * 注销店铺
    	 */
    	cancellation: function () {
    		layer.confirm('是否注销店铺 - ' + stores.storeName + '？', {
    			icon: 0,
    			btn: ['注销', '取消']
    		}, function () {
    			layer.msg('您点击了注销');
    		});
    	}
	};

	// 向外暴露
    var funs = {
        init: function () {
        	laypage.render({
        		elem: 'pagination',
        		count: 50,
        		theme: '#FF7400'
        	})
            funs.seeStore();
        },

        /**
         * 查看店铺基础数据统计
         * @return {} [description]
         */
        seeStore: function () {
        	$('.temp-stores-table-btn').click(function () {
        		var othis = $(this)
        			,type = othis.data('type')
        			,storeId = othis.data('storeid')
        			,storeName = othis.parent().siblings().eq(1).text();

        		stores['id'] = storeId;
        		stores['storeName'] = storeName;
        		stores[type] ? stores[type].call(this, othis) : '';
        	});
        },
    };

    exports('store', funs);
});