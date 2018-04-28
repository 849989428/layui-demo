layui.define([
    'layer'
],function (exports) {
    var $ = layui.jquery
        ,layer = layui.layer;

    // 基础提示
    layer.open({
        type: 1,
        title: false,
        closeBtn: false,
        area: '380px',
        shade: 0.5,
        id: 'TEMP_come_in_prompt',
        resize: false,
        btn: ['我知道了'],
        btnAlign: 'c',
        moveType: 1,
        content: '<div style="padding: 30px;line-height: 22px;background-color: #393D49; color: #fff;">亲，欢迎您进入BD后台！我是人工系统：小易。<br /><br />下面，将给您介绍一则注意事项：<br /><br />不要轻易使用浏览器重载功能刷新页面，尤其是在打开了两个及以上标签页面，因为这会让你打开的标签页面全部关闭掉而我也会再次出现哦，想要重新加载页面可使用头部导航左侧的刷新按钮。<br /><br />在后台使用过程中如果发现有什么问题请及时反馈给开发人员，以免影响您的体验。</div>'
    });

    var funs = {
        init: function () {
            funs.tabIframeReload();
            funs.showShareMemberModal();
        },

        /**
         * 页面选项卡重载 iframe
         */
        tabIframeReload: function () {
            $('.temp-header .tab-page-reload').click(function () {
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
            $('.temp-header .share-member-qrcode').click(function () {
                var qrcodePath = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAACRklEQVRYR6WY4ZKEIAyD1/d/aG9wFibELy07t3/OA8WSJmnxuu/7/sjvuq6PDX3mGM3ps+N63DN+Yw291rn5DL3nGgGlRea4LpCC8pfPZ/x+XdODHnMYkN6oCPg43TfH9K+jONGKAXUp0wUceoVd0fBrT1Oixkj4xiFPT8WHGUwXCCFBqD2bnaR24lYE1ntTSj3YShjbhjQgRYMUMOcTJ2jeheHPvgLXlCUyOwou7xNF0WYpKw+HKvV0SLllJA/zoFMKF4dcSWRkpJQTjyIEyeNepO4UphyhHSapV9xzy8GU+QLJM8gSiMRkku7YC0UndfSHb42rkOnKB9lFq7JOMV1JIPImOyiLq0ZKXNEXkZf47r2mkSCo7CwOObmSb6SFO0J3HcUCxNsPlzvu4tvzEPmTiZLX0btiP9RB7IhS7fLUV6kuVXbShJGiqBlLCDtnV0CUMiewL+pp6eReWYnPrX6Iepauc0x1zh2fusjUwmwccudN/pGcvOuXO6Qfkk+ndsM7bqjklJJ6H/KkhO5W7V2GJ0iQX5FbOyX0XTqHAXn06QXVeIVw2vh4JqasQ+s0SFdsZ6blQbGD3o2PSEvqJTefAGy1LKkk7SrJuZO9znsmtpQRvLSb6hj0Mjo465O9rDGVvTPfF+8C9hTS/7Tmluru5Eq1aAZOBZXcPfGIxqPsiU/JPHXXXte8T6rWeGSfPsekdNGCVRrouJPGnrUpoP8UTU1nPHtJg/cSQfUFLR5Viq9kv6SP1IafYxJClfFRuSH+dAH/AalQwwSwUN1qAAAAAElFTkSuQmCC';
                var content = '<div style="width: 180px;margin: 15px 30px;"><img width="100%" height="100%" src="' + qrcodePath + '" /></div>';
                content += '<p style="margin: 12px 0px 20px;color: #777;" align="center">微信扫一扫快速进入</p>';
                layer.open({
                    type: 1,
                    skin: 'temp-layer-share-member layer-top-100',
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