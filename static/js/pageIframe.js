layui.define([
    'layer'
],function (exports) {
    var $ = layui.jquery
        ,layer = layui.layer;

    var funs = {
        init: function () {
            funs.tabIframeReload();
        },

        /**
         * 页面选项卡重载 iframe
         */
        tabIframeReload: function () {
            $('.liguo-header .tab-page-reload').click(function () {
                var iWidth = 0,
                    iHeight = 0;

                // ****************************
                // 计算 iframe自适应宽高
                var layuiBodyPadding = 20;
                iWidth = $('.layui-body').width() - layuiBodyPadding;
                iHeight = $('.layui-body').height() - $('#win-iframe-tab-title').height() - layuiBodyPadding;
                // ****************************

                var currentIframe = $('#win-iframe-tab-content .layui-show iframe');
                // layer.msg(JSON.stringify('W:'+iWidth+' - H:'+iHeight));

                currentIframe.attr({
                    'src': currentIframe.attr('src'),
                    'width': iWidth,
                    'height': iHeight
                });
            })
        }
    };

    exports('pageIframe', funs);
});