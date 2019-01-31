(function ($) {
    /*
    * 参数说明:
    * count:宫格总数
    * picIndex:运行顺序
    */
    $.fn.drawPrize = function(params) {
        var defaults = {
            sum:'',
            count:0,
            total:30,
            delay:20,
            picIndex:[0,1,2,3,5,9,8,7,6,4],
            pizDom:'',
            btnDom:''
        };

        var that = this;
        that.opts = $.extend({}, defaults, params);
        var _init = function(options) {
            if (options.btnDom && options.pizDom) {
                // 点击抽奖
                $(document).on('click', options.btnDom, function () {
                    var $this = $(this);
                    $this.attr("disabled", true);

                });
            }
        }
    }
})(jQuery || $);