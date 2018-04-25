layui.define(['jquery', 'element'], function (exports) {
    var $ = layui.jquery
        ,element = layui.element;

    var funs = {
        init: function (asideClass, menuJson) {
            console.log(menuJson)
            $.get(menuJson, function (res) {
                var dom = '';

                $.each(res.menus, function (index, item) {
                    dom += funs.forMenu(item);
                });

                $(asideClass).html(dom);
                element.init();
                $(asideClass).children().first().children('a').click();
            });
        },

        forMenu: function (data) {
            var default_action = '';

            if (data.children) {
                var dom = '<li class="layui-nav-item">' +
                        '<a href="javascript:;">' +
                            '<cite>' + data.title + '</cite>' +
                        '</a>' +
                    '<dl class="layui-nav-child">';

                $.each(data.children, function (index, item) {
                    dom += funs.forChild(item);
                });

                dom += '</dl></li>';
                return dom;
            }

            if (data.action) {
                default_action = ' layui-this';
            }

            return '<li class="layui-nav-item' + default_action + '">' +
                    '<a href="javascript:;" data-name="' + data.name + '" data-href="' + data.href + '">' +
                        '<i class="' + data.icon + '"></i> ' +
                        '<cite>' + data.title + '</cite>' +
                    '</a>' +
                '</li>';

        },

        forChild: function (data) {
            return '<dd><a href="javascript:;" data-href="' + data.href + '">'+ data.title +'</a></dd>';
        }
    };

    exports('menu', funs);
});