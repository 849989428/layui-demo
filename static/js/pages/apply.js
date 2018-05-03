layui.define([
	'element',
	'form'
], function (exports) {
	var $ = layui.jquery
		,element = layui.element
		,form = layui.form;

	$('.temp-content').on('click', '.businessDesc, .businessDetailAddress', function () {
		var othis = $(this)
			,tips = othis.data('tips');

		layer.tips(tips, othis, {
			tips: [2]
		});
	});


	$('.temp-apply-customer-service').on('click', '.del', function () {
		var _this = $(this), txt = _this.parent().text();
		layer.confirm('将从数据库中移除该数据', function () {
			_this.parent().parent().remove();
			layer.msg('已移除客服' + txt);
		});
	});

	var funs = {
		init: function () {
			// funs.businessDesc();
		}
	}

	exports('apply', funs);
});