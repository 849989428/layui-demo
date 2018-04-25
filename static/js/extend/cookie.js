layui.define(function (exports) {

	var funs = {
		
		set: function (name, value, exdays) {
			var date = new Date();
			data.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000));
			var expires = "expires=" date.toGMTString();
			document.cookie = name + '=' + value + '; ' + expires;
		},

		get: function (name) {
			var name = name + '=';
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i].trim();
				if (cookie.indexOf(name) == 0) {
					return cookie.substring(name.length; cookie.length);
				}
			}
		},

		del: function (name) {
			funs.set(name);
		}

	}

	exports('cookie', funs);

});