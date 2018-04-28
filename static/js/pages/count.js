layui.define([
    'element',
    'form',
    'layer',
    'laydate'
], function (exports) {
    'use strict';

    // 命名扩展项
    var $ = layui.jquery,
        element = layui.element,
        form = layui.form,
        layer = layui.layer,
        laydate = layui.laydate;

    /**
     * 基础配置及单独事件
     */
    laydate.render({
        elem: '#calenda',
        type: 'datetime',
        position: 'static'
    });


    // 暴露方法
    var funs = {
        init: function () {},

        /**
         * 共享会员数据统计
         * @param {Array} [SMCD] Share member category data
         * @param {Array} [SMND] Share member number data
         */
        shareMemberCount: function (id) {
            var chart = echarts.init(document.getElementById(id)),
              SMCD = ["消费总金额", "满减立减总金额", "现金券总金额", "消费(94%)", "消费利润(6%)", "消费提成(1%)", "使用人数", "消费单量", "链接UV", "链接PV", "新增数(内部)", "新增数(商家)", "新增数(非支付)", "总数(内部)", "总数(商家)", "总数(非支付)"],
              SMND = [2328.59, 50.0, 25.31, 2188.87, 139.71, 3.75, 29, 30, 208, 1014, 7, 3, 0, 3288, 1483, 554];

            var option = {
                title: {
                    text: '共享会员',
                    x: 'left'
                },
                tooltip: {
                    trigger: 'axis'
                },
                xAxis: {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: SMCD
                },
                series: [
                    {
                        name: '共享会员',
                        type: 'bar',
                        data: SMND
                    }
                ]
            }
            chart.setOption(option);
        }
    };
    exports('count', funs);
});