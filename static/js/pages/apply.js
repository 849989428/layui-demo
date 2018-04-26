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


	var funs = {
		init: function () {
			// funs.businessDesc();
		}
	}

	exports('apply', funs);
});