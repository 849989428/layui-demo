layui.define([
    'layer'
],function (exports) {
    var $ = layui.jquery
        ,layer = layui.layer;

    var funs = {
        init: function () {
            funs.tabIframeReload();
            funs.showShareMemberModal();
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
                var layuiBodyPadding = 0;
                // iWidth = $('.layui-body').width() - layuiBodyPadding;
                iWidth = '100%';
                // iHeight = $('.layui-body').height() - $('#win-iframe-tab-title').height() - layuiBodyPadding;
                iHeight = '100%';
                // ****************************

                var currentIframe = $('#win-iframe-tab-content .layui-show iframe');
                // layer.msg(JSON.stringify('W:'+iWidth+' - H:'+iHeight));

                currentIframe.attr({
                    'src': currentIframe.attr('src')
                });

                $('#win-iframe-tab-content iframe').attr({'width': iWidth, 'height': iHeight});
            })
        },

        /**
         * 弹出共享会员二维码
         */
        showShareMemberModal: function () {
            $('.liguo-header .share-member-qrcode').click(function () {
                var content = '<div style="width: 180px;margin: 30px auto;"><img width="100%" height="100%" src="' +
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACRklEQVRYR6WY4ZKEIAyD1/d/aG9wFibELy07t3/OA8WSJmnxuu/7/sjvuq6PDX3mGM3ps+N63DN+Yw291rn5DL3nGgGlRea4LpCC8pfPZ/x+XdODHnMYkN6oCPg43TfH9K+jONGKAXUp0wUceoVd0fBrT1Oixkj4xiFPT8WHGUwXCCFBqD2bnaR24lYE1ntTSj3YShjbhjQgRYMUMOcTJ2jeheHPvgLXlCUyOwou7xNF0WYpKw+HKvV0SLllJA/zoFMKF4dcSWRkpJQTjyIEyeNepO4UphyhHSapV9xzy8GU+QLJM8gSiMRkku7YC0UndfSHb42rkOnKB9lFq7JOMV1JIPImOyiLq0ZKXNEXkZf47r2mkSCo7CwOObmSb6SFO0J3HcUCxNsPlzvu4tvzEPmTiZLX0btiP9RB7IhS7fLUV6kuVXbShJGiqBlLCDtnV0CUMiewL+pp6eReWYnPrX6Iepauc0x1zh2fusjUwmwccudN/pGcvOuXO6Qfkk+ndsM7bqjklJJ6H/KkhO5W7V2GJ0iQX5FbOyX0XTqHAXn06QXVeIVw2vh4JqasQ+s0SFdsZ6blQbGD3o2PSEvqJTefAGy1LKkk7SrJuZO9znsmtpQRvLSb6hj0Mjo465O9rDGVvTPfF+8C9hTS/7Tmluru5Eq1aAZOBZXcPfGIxqPsiU/JPHXXXte8T6rWeGSfPsekdNGCVRrouJPGnrUpoP8UTU1nPHtJg/cSQfUFLR5Viq9kv6SP1IafYxJClfFRuSH+dAH/AalQwwSwUN1qAAAAAElFTkSuQmCC' +
                    '" /></div>';
                content += '<p style="margin: 12px 0px 20px;color: #777;" align="center">微信扫一扫快速进入</p>';
                layer.open({
                    type: 1,
                    skin: 'liguo-layer-share-member layer-top-100',
                    anim: 2,
                    closeBtn: 0,
                    shadeClose: true,
                    title: '共享会员二维码',
                    content: content
                });
            })
        }
    };

    exports('pageIframe', funs);
});