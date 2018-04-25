layui.define(['element', 'layer'], function (exports) {
    var $ = layui.jquery
        ,element = layui.element
        ,layer = layui.layer
        ,testTabTitle = [];

    var funs = {
        init: function (Aside) {

            var layId = location.hash.replace('/^#/', '');

            element.on('nav(liguo-aside)', function (elm) {
                funs.elementNavbar(elm, 1);
            });

            element.on('nav(liguo-header-nav-right)', function (elm) {
                funs.elementNavbar(elm);
            });

            element.on('tab(test)', function (res) {
                var hash = $(this).attr('lay-id');
                location.hash = hash;
                $(Aside + ' a[data-href]').each(function (index, item) {
                    if (hash == $(item).data('href')) {
                        $(item).parent().addClass('layui-this');
                    } else {
                        $(item).parent().removeClass('layui-this');
                    }
                });
            });

            element.on('tabDelete(test)', function (res) {
                testTabTitle.splice(res.index, 1);
            });
        },

        elementNavbar: function (elm, type) {
            var oid = elm.data('href')
                ,isYes = false;
            if (!oid) {
                return false;
            }
            for (var i = 0; i < testTabTitle.length; i++) {
                if (oid === testTabTitle[i]) {
                    isYes = true;
                }
            }
            if (isYes == false) {
                var iWidth = 0,
                    iHeight = 0;

                // ****************************
                // 计算 iframe自适应宽高
                var layuiBodyPadding = 0;
                // iWidth = $('.layui-body').width() - layuiBodyPadding;
                iWidth = '100%';
                // iHeight = $('.layui-body').height() - $('#win-iframe-tab-title').height() - layuiBodyPadding;
                iHeight = '100%';
                // ****************************

                var iframeId = 'iframe_' + new Date().getTime();
                var iframe = '<iframe src="' + elm.data('href') + '?' + iframeId + '" class="layui-anim-scale" id="' + iframeId + '" width="' + iWidth + '" height="' + iHeight + '"></iframe>';
                element.tabAdd('test', {
                    title: elm.text(),
                    content: iframe,
                    id: elm.data('href')
                });
                testTabTitle.push(elm.data('href'));
                // ******************************
                $('#win-iframe-tab-title').animate({scrollLeft: $('#win-iframe-tab-title')[0].scrollWidth}, 300)
            }
            element.tabChange('test', oid);
            if (type) {
                elm.parent().addClass('layui-this');
            }

            // ******************************
            $('#win-iframe-tab-title').animate({
                scrollLeft: $('#win-iframe-tab-title .layui-this')[0].offsetLeft - 15
            }, 200);
        }
    };

    exports('listenElement', funs);
});