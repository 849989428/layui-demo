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
        elem: '#laydateInput1',
        type: 'datetime',
        range: true
    });
    laydate.render({
        elem: '#laydateInput2',
        type: 'datetime',
        range: true
    });
    laydate.render({
        elem: '#calenda',
        position: 'static'
    });


    // 暴露方法
    var funs = {
        init: function () {},

        returnChartsObj: function (id) {
            return echarts.init(document.getElementById(id));
        },

        /**
         * 共享会员数据统计
         * @param {Array} [SMCD] Share member category data
         * @param {Array} [SMND] Share member number data
         * @return {charts}
         */
        shareMemberCount: function (id) {
            var chart = funs.returnChartsObj(id),
                SMCD = ["消费总金额", "满减立减总金额", "现金券总金额", "消费(94%)", "消费利润(6%)", "消费提成(1%)", "使用人数", "消费单量", "链接UV", "链接PV", "新增数(内部)", "新增数(商家)", "新增数(非支付)", "总数(内部)", "总数(商家)", "总数(非支付)"],
                SMND = [2328.59, 50.0, 25.31, 2188.87, 139.71, 3.75, 29, 30, 208, 1014, 7, 3, 0, 3288, 1483, 554],
                option = {
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
                    series: [{
                        name: '共享会员',
                        type: 'bar',
                        data: SMND
                    }]
                };
            chart.setOption(option);
        },

        /**
         * 餐易点基础基数
         * @param {Array} [NBCCD] new base count category data
         * @param {Array} [NBCND] new base count number data
         * @return {charts}
         */
        cydNewBaseCount: function (id) {
            var chart = funs.returnChartsObj(id),
                NBCCD = ['新签(未入驻)', '新入驻', '新用户', '活跃用户', '订单总数'],
                NBCND = [0, 1, 63, 250, 365],
                option = {
                    title: {
                        text: '餐易点基础基数'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    xAxis: {
                        type: 'category',
                        data: NBCCD
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [{
                        name: '基数',
                        type: 'bar',
                        data: NBCND
                    }]
                };
            chart.setOption(option);
        },

        /**
         * 餐易点交易额
         * 这里的表格采用饼状图
         * 总交易额被 TCCD 分割，因此这里的扣点需要输出的是扣除出来的交易额而不是扣除之后的交易额
         * @param {Array} [TCCD] A turnover count category data
         * @param {Array} [TCND] A trunover count number data
         * @return {charts}
         */
        turnoverCount: function (id) {
            var chart = funs.returnChartsObj(id),
                TCCD = ['在线总交易额', '扣点(0.6%)', '台卡交易额', '微信与充值交易额'],
                TCND = [8099.42, 43.33, 545.6, 7508.49],
                option = {
                    title: {
                        text: '交易额',
                        x: 'center'
                    },
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br />{b} : {c} ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        left: 'left',
                        data: TCCD
                    },
                    series: [{
                        name: '总交易额',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: [{
                                value: TCND[0],
                                name: TCCD[0]
                            },
                            {
                                value: TCND[1],
                                name: TCCD[1]
                            },
                            {
                                value: TCND[2],
                                name: TCCD[2]
                            },
                            {
                                value: TCND[3],
                                name: TCCD[3]
                            }
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }]
                };
            chart.setOption(option);
        },

        /**
         * 我的代理 - 城市基数统计
         * @param {Array} [ACCDD] Agent city count a week data
         * @param {Array} [ACCCD] Agent city count category data
         * @param {Array} [ACCND] Agent city count number data
         * @return {charts}
         */
        agentCityCount: function (id) {
            var chart = funs.returnChartsObj(id),
                ACCDD = ['2018-04-23', '2018-04-24', '2018-04-25', '2018-04-26', '2018-04-27', '2018-04-28', '2018-04-29'],
                ACCCD = ['有效订单量', '总交易额', '新用户', '活跃用户'],
                ACCND = [{
                    name: ACCCD[0],
                    type: 'line',
                    data: [0, 30, 40, 5, 1, 3, 1]
                }, {
                    name: ACCCD[1],
                    type: 'line',
                    data: [3, 1, 4, 5, 39, 5, 2]
                }, {
                    name: ACCCD[2],
                    type: 'line',
                    data: [9, 4, 3, 32, 12, 5, 3]
                }, {
                    name: ACCCD[3],
                    type: 'line',
                    data: [9, 0, 10, 4, 23, 12, 45]
                }],
                option = {
                    title: {
                        text: '代理城市基数'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data: ACCCD
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ACCDD
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: ACCND
                };
            chart.setOption(option);
        }
    };
    exports('count', funs);
});